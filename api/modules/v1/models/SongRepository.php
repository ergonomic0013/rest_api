<?php
namespace api\modules\v1\models;

use yii\db\ActiveRecord;

/**
 * Country Model
 *
 * @author Budi Irawan <deerawan@gmail.com>
 */
class SongRepository extends ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'playlsit';
    }
    
    /**
     * Define rules for validation
     */
    public function rules()
    {
        return [
            [['title'], 'required'],
            [['url'], 'unique'],
            [['url'], 'sting'],
        ];
    }
    
    public function attributeLabels()
    {
        return [
            'title' => 'Title',
            'utl' => 'Url',
        ];
    }
    
    
}
