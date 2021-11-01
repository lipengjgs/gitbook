/**
 * 一步一步创建一个复杂对象的过程
 */

public interface Item {
    public String name();
    public float price();
    public Packing pack();
}

public interface Packing {
    public String pack();
}

public class Wrapper implements Packing {
    @override
    public String pack() {
        return "wrapper";
    }
}
public class Bottle implements Packing {
    @override
    public String pack() {
        return "bottle";
    }
}

public class Burger implements Item {
    @override
    public Wrapper pack() {
        return new Wrapper()
    }
    @override
    public abstract float price();
}
public class ColdDrink implements Item {
    @override
    public Bottle pack() {
        return new Bottle();
    }
    @override
    public abstract float price();
}

public class VegBurger extends Burger {
    @override
    public float price() {
        return 25.0f;
    }
    @override
    public String name() {
        return "veg burger";
    }
}

public class ChickenBurger extends Burger {
    @override
    public float price() {
        return 50.0f;
    }
    @override
    public String name() {
        return "chicken burger";
    }
}

public class Coke extends ColdDrink {
    @override
    public float price() {
        return 35.0f;
    }
    @override
    public String name() {
        return "Coke";
    }
}
public class Pepsi extends ColdDrink {
    @override
    public float price() {
        return 30.0f;
    }
    public String name() {
        return "Pepsi"
    }
}

import java.util.ArrayList;
import java.util.ArrayList;

public class Meal {
    private List<Item> items = new ArrayList<Item>();
    public void addItem(Item item) {
        items.add(item);
    }
    public float getCost() {
        float cost = 0.0f;
        for (Item item: items) {
            cost += item.price();
        }
        return cost;
    }
    public void showItems() {
        for (Item item: items) {
            System.out.print("item: " + item.name());
            System.out.print("Packing: " + item.pack());
            System.out.println("price: " + item.price());
        }
    }
}

public class MealBuilder {
    public Meal prepareVegMeal() {
        Meal meal = new Meal();
        meal.addItem(new VegBurger());
        meal.addItem(new Coke());
        return meal;
    }

    public Meal prepareNonVegMeal() {
        Meal meal = new Meal();
        meal.addItem(new ChickenBurger());
        meal.addItem(new Pepsi());
        return meal;
    }  
}