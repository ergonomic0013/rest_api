<?php

use yii\db\Migration;

/**
 * Handles the creation of table `user`.
 */
class m160817_210658_create_playlist_table extends Migration
{
    /**
     * @inheritdoc
     */
    public function up()
    {
        $this->createTable('playlist', [
            'id' => $this->primaryKey(),
            'title' => $this->string(45)->unique(),
            'url' => $this->string(255),
        ]);
        
        $this->insert('song', [
            'title' => 'Summertime',
            'url' => 'https://music.youtube.com/watch?v=2nyEtdDhWmk&feature=share',
        
        ]);
        
        $this->insert('song', [
            'title' => 'Cant We Be Friends',
            'url' => 'https://music.youtube.com/watch?v=Ri_Wugqa1E0&feature=share',
        ]);
        
        $this->insert('song', [
            'title' => 'Moonlight in Vermont',
            'url' => 'https://music.youtube.com/watch?v=Ri_Wugqa1E0&feature=share',
        ]);
    }
    
    /**
     * @inheritdoc
     */
    public function down()
    {
        $this->dropTable('playlist');
    }
}
