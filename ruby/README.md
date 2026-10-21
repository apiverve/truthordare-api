# Truth or Dare API - Ruby Gem

The Truth or Dare API generates random truth questions and dare challenges for the classic party game. Features 400+ unique prompts with per-API-key tracking to avoid repeats.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_truthordare'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_truthordare
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_truthordare'

# Initialize the client
client = APIVerve::Truthordare::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({
  type: "random",
  adult: 
})

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ type: "random", adult:  })
  puts response["data"]
rescue APIVerve::Truthordare::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Truthordare::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Truthordare::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/truthordare?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/truthordare?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/truthordare?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
