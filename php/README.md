# Truth or Dare API - PHP Package

The Truth or Dare API generates random truth questions and dare challenges for the classic party game. Features 400+ unique prompts with per-API-key tracking to avoid repeats.

## Installation

Install via Composer:

```bash
composer require apiverve/truthordare
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Truthordare\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute([
    'type' => 'random',
    'adult' => 
]);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Truthordare\Client;
use APIVerve\Truthordare\Exceptions\APIException;
use APIVerve\Truthordare\Exceptions\ValidationException;

try {
    $response = $client->execute(['type' => 'random', 'adult' => ]);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "type": "truth",
    "prompt": "What is the weirdest thing you've ever eaten?"
  }
}
```

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/truthordare?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/truthordare?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/truthordare?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
