# MySQL

[windows下安装MySQL(非安装版)](https://dev.mysql.com/doc/refman/8.0/en/windows-create-option-file.html)

- [下载](https://dev.mysql.com/downloads/mysql/)

```bash
mysqld --console
```

## 排序规则

utf8_unicode_ci比较准确，utf8_general_ci速度比较快

## MySQL密码问题

类型选择的条件是: 满足业务场景下,  选择最小的.

数据库本身来讲不该存binary和blob,
如果存了, 读出来, 二进制或字符串方式传给客户端就成

有时候，只是为了自己测试，不想密码设置得那么复杂，譬如只想设置root的密码为123456。
SET PASSWORD FOR 'root'@'localhost' = PASSWORD('123456');
但是会报错：
mysql> SET PASSWORD FOR 'root'@'localhost' = PASSWORD('123');
ERROR 1819 (HY000): Your password does not satisfy the current policy requirements

【原因】
原来MySQL5.6.6版本之后增加了密码强度验证插件validate_password，相关参数设置的较为严格。
使用了该插件会检查设置的密码是否符合当前设置的强度规则，若不满足则拒绝设置。影响的语句和函数有：create user,grant,set password,password(),old password。

【解决】
1） 查看mysql全局参数配置
该问题其实与mysql的validate_password_policy的值有关。
查看一下msyql密码相关的几个全局参数：
mysql> select @@validate_password_policy;
+----------------------------+
| @@validate_password_policy |
+----------------------------+
| MEDIUM                     |
+----------------------------+
1 row in set (0.00 sec)

mysql> SHOW VARIABLES LIKE 'validate_password%';
+--------------------------------------+--------+
| Variable_name                        | Value  |
+--------------------------------------+--------+
| validate_password_dictionary_file    |        |
| validate_password_length             | 8      |
| validate_password_mixed_case_count   | 1      |
| validate_password_number_count       | 1      |
| validate_password_policy             | MEDIUM |
| validate_password_special_char_count | 1      |
+--------------------------------------+--------+
6 rows in set (0.08 sec)

2）参数解释

validate_password_dictionary_file
插件用于验证密码强度的字典文件路径。

validate_password_length
密码最小长度，参数默认为8，它有最小值的限制，最小值为：validate_password_number_count + validate_password_special_char_count + (2 * validate_password_mixed_case_count)

validate_password_mixed_case_count
密码至少要包含的小写字母个数和大写字母个数。

validate_password_number_count
密码至少要包含的数字个数。

validate_password_policy
密码强度检查等级，0/LOW、1/MEDIUM、2/STRONG。有以下取值：
Policy                 Tests Performed
0 or LOW               Length
1 or MEDIUM         Length; numeric, lowercase/uppercase, and special characters
2 or STRONG        Length; numeric, lowercase/uppercase, and special characters; dictionary file
默认是1，即MEDIUM，所以刚开始设置的密码必须符合长度，且必须含有数字，小写或大写字母，特殊字符。

validate_password_special_char_count
密码至少要包含的特殊字符数。

3）修改mysql参数配置
mysql> set global validate_password_policy=0;
Query OK, 0 rows affected (0.05 sec)

mysql>
mysql>
mysql> set global validate_password_mixed_case_count=0;
Query OK, 0 rows affected (0.00 sec)

mysql> set global validate_password_number_count=3;
Query OK, 0 rows affected (0.00 sec)

mysql> set global validate_password_special_char_count=0;
Query OK, 0 rows affected (0.00 sec)

mysql> set global validate_password_length=3;
Query OK, 0 rows affected (0.00 sec)

mysql> SHOW VARIABLES LIKE 'validate_password%';
+--------------------------------------+-------+
| Variable_name                        | Value |
+--------------------------------------+-------+
| validate_password_dictionary_file    |       |
| validate_password_length             | 3     |
| validate_password_mixed_case_count   | 0     |
| validate_password_number_count       | 3     |
| validate_password_policy             | LOW   |
| validate_password_special_char_count | 0     |
+--------------------------------------+-------+
6 rows in set (0.00 sec)

4）修改简单密码：
mysql> SET PASSWORD FOR 'root'@'localhost' = PASSWORD('123');
Query OK, 0 rows affected, 1 warning (0.00 sec)

Client does not support authentication protocol requested by server的解决方法

```bash
通过命令行进入解压的mysql根目录下。
登陆数据库 
mysql -uroot -p
输入root的密码 
Enter password: ******
更改加密方式（原样拷贝到命令窗中） 
mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY 'password' PASSWORD EXPIRE NEVER;
更改密码：该例子中 123456为新密码 
mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';
刷新： 
mysql> FLUSH PRIVILEGES;
```
