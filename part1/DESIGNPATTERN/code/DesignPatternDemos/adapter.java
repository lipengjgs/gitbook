/**
 * 使用适配器模式使得原来只能播放mp3的 AudioPlayer 可以播放其它视频格式了 
 */

// two interfacesj
public interface MediaPlayer {
    public void play(String audioType, String fileName);
}
public interface AdvancedMediaPlayer {
    public void playVlc(String fileName);
    public void playMp4(String fileName);
}
// only play mp3 before;
public class AudioPlayer implements MediaPlayer {
    MediaAdapter mediaAdapter;
    
    @override
    public void play(String audioType, String fileName) {
        if (audioType.equalsIgnoreCase("mp3")) {
            System.out.println("playing mp3 file" + fileName);
        }
        // here we use MediaAdapter to play advanced media
        else if (audioType.equalsIgnoreCase("vlc") || audioType.equalsIgnoreCase("mp4")) {
            mediaAdapter = new MediaAdapter(audioType);
            mediaAdapter.play(audioType, fileName);
        } else {
            System.out.println("playing invalid file type" + audioType);
        }
    }
}
// instances of AdvancedMediaPlayer
public class VlcPlayer implements AdvancedMediaPlayer {
    @override
    public void playVlc(String fileName) {
        System.out.println("playing vlc file" + fileName);
    }

    @override
    public void playMp4(String fileName) {
        // do nothing
    }
}
public class Mp4Player implements AdvancedMediaPlayer {
    @override
    public void playVlc(String fileName) {
        // do nothing
    }

    @override
    public void playMp4(String fileName) {
        System.out.println("playing mp4 file" + fileName);
    }
}
// create an adapter for AudioPlayer
public class MediaAdapter implements MediaPlayer {
    AdvancedMediaPlayer advancedMediaPlayer;

    public MediaAdapter(String audioType) {
        if (audioType.equalsIgnoreCase("vlc")) {
            advancedMediaPlayer = new VlcPlayer();
        } else if (audioType.equalsIgnoreCase("mp4")) {
            advancedMediaPlayer = new Mp4Player();
        }
    }

    @override
    public void play(String audioType, String fileName) {
        if (audioType.equalsIgnoreCase("vlc")) {
            advancedMediaPlayer.playVlc(fileName);
        } else if (audioType.equalsIgnoreCase("mp4")) {
            advancedMediaPlayer.playMp4(fileName);
        }
    }
}