<?php

/* @var $this yii\web\View */

use frontend\assets\PhoneBookAppAsset;

PhoneBookAppAsset::register($this);

$this->title = 'My Yii Application';

?>

<form id="find-user-form" class="form-inline" role="form">
    <div class="title">Поиск:</div>
    <div class="form-group">
        <label>
            <input name="username" type="text" class="form-control" placeholder="Введите имя">
        </label>
    </div>
    
    <button type="submit" class="btn btn-default">Найти</button>
    
    <div class="errors">
    
    </div>
</form>


<form id="create-user-form" class="form-inline" role="form">
    <div class="title">Создать запись:</div>
    <div class="form-group">
        <label>
            <input name="username" type="text" class="form-control" placeholder="Введите имя">
        </label>
    </div>
    <div class="form-group">
        <label>
            <input name="phone" type="text" class="form-control" data-format="+38 (999) 999-9999"
                   placeholder="Введите телефон">
        </label>
    </div>
    
    <button type="submit" class="btn btn-default">Создать</button>
    
    <div class="errors">
    
    </div>
</form>

<div class="site-index">
    <table class="table table-hover">
        <thead>
        <tr>
            <th>id</th>
            <th>Имя</th>
            <th>Телефон</th>
            <th></th>
        </tr>
        
        </thead>
        <tbody id="users">
        
        </tbody>
    </table>
</div>


<form id="update-user-form" style="display: none" class="form-inline" role="form">
    <div class="title">Изменить запись:</div>
    <div class="form-group">
        <label>
            <input name="username" type="text" class="form-control" placeholder="Введите имя">
        </label>
    </div>
    <div class="form-group">
        <label>
            <input name="phone" type="text" class="form-control" placeholder="Введите телефон">
        </label>
    </div>
    <input name="id" type="hidden" class="form-control">
    <button type="submit" class="btn btn-default">Изменить</button>
    
    <div class="errors">
    
    </div>
</form>