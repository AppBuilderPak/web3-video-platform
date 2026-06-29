<?php
class HomeController { public function index(): void { $videos=(new Video())->latest(); View::render('home',['title'=>App::config('app.name'),'videos'=>$videos]); } public function search(): void { $q=Validator::str($_GET['q'] ?? '',1,120); View::render('home',['title'=>'Search','videos'=>(new Video())->search($q),'query'=>$q]); }}
