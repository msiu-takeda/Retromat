<?php

namespace App\Tests;

use Doctrine\Common\DataFixtures\Executor\ORMExecutor;
use Liip\FunctionalTestBundle\Test\WebTestCase;
use Liip\TestFixturesBundle\Services\DatabaseToolCollection;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;

class AbstractTestCase extends WebTestCase
{
    /**
     * @param $fixtures
     * @return ORMExecutor
     */
    public function loadFixtures($fixtures): ORMExecutor
    {
        return $this->getContainer()
            ->get(DatabaseToolCollection::class)
            ->get()
            ->loadFixtures($fixtures);
    }

    /**
     * @return KernelBrowser
     */
    protected function getKernelBrowser(): KernelBrowser
    {
        if (static::$booted) {
            static::ensureKernelShutdown();
        }

        return static::createClient(['debug' => false]);
    }
}
