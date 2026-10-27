Pod::Spec.new do |s|
  s.name             = 'APIVerveTruthorDare'
  s.version          = '1.2.3'
  s.summary          = 'The Truth or Dare API generates random truth questions and dare challenges for the classic party game.'
  s.description      = <<-'DESC'
The Truth or Dare API generates random truth questions and dare challenges for the classic party game. Features 400+ unique prompts with per-API-key tracking to avoid repeats.

This iOS/macOS SDK provides a convenient way to access the Truth or Dare from APIVerve.
Supports both callback-based and async/await patterns.
                       DESC

  s.homepage         = 'https://apiverve.com/marketplace/truthordare?utm_source=cocoapods&utm_medium=referral&utm_content=homepage'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'APIVerve' => 'hello@apiverve.com' }
  # The SDK repo holds every language; the pod lives under cocoapods/ with its own tag.
  s.source           = { :git => 'https://github.com/apiverve/truthordare-api.git', :tag => "cocoapods/v#{s.version}" }

  s.ios.deployment_target = '15.0'
  s.osx.deployment_target = '12.0'

  s.swift_version = '5.0'

  s.source_files = 'cocoapods/Sources/APIVerveTruthorDare/**/*.swift'

  s.frameworks = 'Foundation'

  # APIResponse, APIVerveError and the request plumbing, shared by every APIVerve pod.
  s.dependency 'APIVerveCore', '~> 1.2'
end
