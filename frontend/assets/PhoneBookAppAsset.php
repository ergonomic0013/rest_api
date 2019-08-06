<?php

namespace frontend\assets;

use yii\web\AssetBundle;

/**
 * Main frontend application asset bundle.
 */
class PhoneBookAppAsset extends AssetBundle
{
    public $basePath = '@webroot/phone_book_app';
    public $baseUrl = '@web/phone_book_app';
    public $css = [
    
    ];
    public $js = [
        'js/api.js',
        'js/models/Form.js',
        'js/models/UserRepository.js',
        'js/views/UserView.js',
        'js/main.js',
    ];
    public $depends = [
        AppAsset::class,
    ];
}
