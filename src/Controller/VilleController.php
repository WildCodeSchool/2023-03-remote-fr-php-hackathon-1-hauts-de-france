<?php

namespace App\Controller;

class VilleController extends AbstractController
{
    public function lille(): string
    {
        return $this->twig->render('Home/Lille.html.twig');
    }
    public function lens(): string
    {
        return $this->twig->render('Home/lens.html.twig');
    }
    public function arras(): string
    {
        return $this->twig->render('Home/Arras.html.twig');
    }
    public function dunkerque(): string
    {
        return $this->twig->render('Home/dunkerque.html.twig');
    }
    public function berck(): string
    {
        return $this->twig->render('Home/berck.html.twig');
    }

    public function cambrai(): string
    {
        return $this->twig->render('Home/cambrai.html.twig');
    }
    public function calais(): string
    {
        return $this->twig->render('Home/calais.html.twig');
    }
    public function amiens(): string
    {
        return $this->twig->render('Home/amiens.html.twig');
    }
}
