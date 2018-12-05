Pod::Spec.new do |s|
  s.name             = 'VideoRenderer'
  s.version          = '1.24'
  s.summary          = 'Default video renderers for OathVideoPartnerSDK.'
  s.license          = { type: 'MIT', file: 'LICENSE' }
  s.swift_version    = '4.1'
  s.homepage         = 'https://github.com/OathAdPlatforms/OneMobileSDK-videorenderer-ios.git'
  s.author           = {
    'Andrey Moskvin' => 'andrey.moskvin@oath.com',
    'Alexey Demedetskiy' => 'alexey.demedetskiy@oath.com',
    'Bogdan Bilonog' => 'bogdan.bilonog@oath.com',
    'Roman Tysiachnik' => 'roman.tysiachnik@oath.com',
    'Vladyslav Anokhin' => 'vladyslav.anokhin@oath.com'
  }
  s.source = { :git => 'https://github.com/OathAdPlatforms/OneMobileSDK-videorenderer-ios.git',
               :tag => s.version.to_s }
  s.source_files     = 'VideoRenderer/**/*.swift'
  s.exclude_files    = 'VideoRenderer/**/*Test*'

  s.ios.deployment_target = '9.0'
  s.tvos.deployment_target = '9.0'
end
