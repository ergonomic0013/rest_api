<?php

namespace api\modules\v1\controllers;

use api\modules\v1\models\SongRepository;
use yii\rest\Controller;

/**
 * Controller API
 */
class SongController extends Controller
{
    public function actionIndex()
    {
        return SongRepository::find()->asArray()->all();
    }
    
    public function actionView($id)
    {
        return SongRepository::find()->where($id)->asArray()->one();
    }
    
    public function actionDelete($id)
    {
        return SongRepository::deleteAll(['id' => $id]);
    }
    
    public function actionCreate()
    {
        $songPostParams = \Yii::$app->request->post();
        
        $song = new SongRepository();
        $song->title = $songPostParams['title'];
        $song->url = $songPostParams['url'];
        
        if ($song->save()) {
            return $song;
        } else {
            return $song->errors;
        }
    }
    
    public function actionUpdate($id)
    {
        $songPostParams = \Yii::$app->request->post();
        
        $song = SongRepository::findOne($id);
        $song->setAttributes([
            'title' => $songPostParams['title'],
            'url' => $songPostParams['url'],
        ]);
        
        if ($song->save()) {
            return $song;
        } else {
            return $song->errors;
        }
    }
    
    public function actionSearch($title = '')
    {
        $song = SongRepository::findOne(['title' => $title]);
        if ($song) {
            return $song;
        } else {
            return [
                'title' => ['Song not found'],
            ];
        }
        
    }
    
}


