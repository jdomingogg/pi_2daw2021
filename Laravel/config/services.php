<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
        'endpoint' => env('MAILGUN_ENDPOINT', 'api.mailgun.net'),
    ],

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],
    /*
    'firebase' => [
        'database_url' => env('FIREBASE_DATABASE_URL', 'https://domingogarrido-laravel-default-rtdb.firebaseio.com/'),
        'project_id' => env('FIREBASE_PROJECT_ID', 'domingogarrido-laravel'),
        'private_key_id' => env('FIREBASE_PRIVATE_KEY_ID', '88d52b9c008b03db1bdb1ab7d35ae269da1a90cf'),
        // replacement needed to get a multiline private key from .env
        'private_key' => str_replace("\\n", "\n", env('FIREBASE_PRIVATE_KEY', "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDFWRL50q1RdbY0\nP5AGn/jxoXVzQX0/nG3CHYDZV/LfRhsQGzlBYlDasQRHhRmrEIALZbJr25LkOWe5\nsMIam7/eQFVSJj75dIUzvLMDzwdhL5jbYD1uHlvza9awxkk7BmdJg8pSXrLLyQTA\n6ZtcrjLNGZIIzEI0/tGo4uf7DQYq/Mp4Xkc/vtJ4PmrWbqJ6pbky5QU74nGUUhAC\nSrn56cEdG7owUBzIQy1sBkLiO+tb7PQ8SYGeIxlzPeAyYt7U6A+9UHfuwpGCaeQC\nnOJ88dhegYFeibIhQwdHNUCSllWfAjP5SCpW6Gg1fGO7EiduGoGATdWyhlRCbOa5\ngwe9rm1vAgMBAAECggEAHwnU6bTgbIzydMJAgUI80agexFta+xu7yYmBX+2stcAd\ndomJlkaDx/mKXkNJV7XXJbO/faZBsqJytWpfBPdVFHwSz0JTqkFQx+PYVfOESh1F\n0c8PqledB6qA0DnHf8CQkyfmtNDPFy0NEdhMBqYhOE/av4Z8rUAcso7JhJs2SqFD\npQh5MBT4eRfad8kWkxiuLXJs4oKJTnnmF+27KAx8IDx7xGzDq4j83Ga6YXwDMj0o\ncM84XBkzYOHpS0KnVtynkhz22xBBU4WRmj9gZMqMgxBM2PlHokyUcK9Zsw9cmG5i\nM3KpTT9et4CrgiTlUg6E5ZP+dfxEvXh41TBABICryQKBgQD25Zb0S4k1KoQowpeI\ncHtunfqiTbuixhaJnWJ1YlWR/l3pBa0a1kPaf1EycfI6ynOKsDZMmPsjrKlWNz1d\neZAzGHTp0bY6Vhavz9EndfX2hsNWR1fC13dSTjfoYukcZF3Loq8qt3hZNx+hzYBh\nf69W7xh8WXbqn7tIP8c0OXvE6QKBgQDMn81kGh460FIxTBF1QkBp5afhCcJTJTqa\ns731DAUvUDNBXeK5BL6tewErAheHQl/TkvaN440U4Y7Cmn9V7iA0mFOtNTLgcuZh\ncTjrd16ZUWh15ARIb6dA9KxeX2kU0wA8iAAc0fNRuC2ExfU7H1zMtV9rs9GW6yX+\njPrRf5YIlwKBgCpMk1wvRMaTDildjVCW1M7Sygncf3UXsuzIxgGOY1Kr3bL6gfnD\nE8TvYx3dX76qyLjOD793xi8KeciHlj/Zf9cBLaaRg0LjVOeyFwdHsmgWFolFl8eN\n2qeDNxjdOUrf9yHYMWKEJF5Ej2rNJl2N3qBqPiuvuCviSdfK9XoBDy9hAoGAE3Ol\nfLyW3xRqm9EVX8Y6hVaVjOj2lhzV41ru1dqcq5C+LpqUMO5oielFhScfwXXn0h8I\nXRiikreWcJ1rOWn3mchZO//wpDGIAP9YX9nrHjwE6CAS4CftCFm6AQak4JvmS9rJ\n1/OFY+FUQmjnFQW4NqWPOpfPdr9Hz1jrhvrP8mUCgYEApQFOed8hYmZgU9cDPH57\nGOKJRjq1UzFIPkDdX5jeQ6qNsjvjk1FtKmU4TvvIcO2Q3K+1H7vY34gzTI2zj2mw\nSit1FfI/lz3ktuH6u1PTHZQj99kED745dmNwY86P2ccbfP+ZN+YWyECz23y2hw2s\nkB+9K024nFg089L0st5tsMI=\n-----END PRIVATE KEY-----\n")),
        'client_email' => env('FIREBASE_CLIENT_EMAIL', 'firebase-adminsdk-n60ml@domingogarrido-laravel.iam.gserviceaccount.com'),
        'client_id' => env('FIREBASE_CLIENT_ID', '108957769133782286616'),
        'client_x509_cert_url' => env('FIREBASE_CLIENT_x509_CERT_URL', 'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-n60ml%40domingogarrido-laravel.iam.gserviceaccount.com'),
    ]*/
];
