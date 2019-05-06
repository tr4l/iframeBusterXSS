#!/usr/bin/ruby

require 'faraday'
require 'optparse'

options = {}
OptionParser.new do |parser|
  parser.on("-r", "--root ROOT",
            "http/https ROOT path you want to check like: http://perdu.com") do |root|
    puts "Root path: #{root}"
    options[:root] = root;
  end
end.parse!

def check_xss(url, *content)
  res = Faraday.get url
  p "Checking the following url for existence and probable XSS: " + url
  if (res.success?) then
    if content.length == 0 then
      puts "  [/] " + url + " probable XSS"
    elsif (res.body =~ /#{Regexp.quote(content[0])}/) then
      puts "  [/] " + url + " probable XSS and matching content: " + content[0]
    end
  end
end

check_xss options[:root] + '/predicta/predicta_bf.html', 'function getParam';
check_xss options[:root] + '/admotion/afa-iframe.htm', 'args.iq';
check_xss options[:root] + '/ipinyou/py_buster.html';
check_xss options[:root] + '/rockabox/rockabox_buster.html', 'function getParameterByName';
check_xss options[:root] + '/undertone/iframe-buster.html';
check_xss options[:root] + '/adform/IFrameManager.html', 'setIntervalXSS';
check_xss options[:root] + '/bonzai/bonzaiBuster.html';
check_xss options[:root] + '/exponential/buster.html';
check_xss options[:root] + '/eyeblaster/addineyeV2.html','addineye.js';
check_xss options[:root] + '/eyewonder/interim.html', 'document.write(adUrl';
check_xss options[:root] + '/flashtalking/ftlocal.html', 'ftscript02.setAttribute';
check_xss options[:root] + '/jivox/jivoxibuster.html';
check_xss options[:root] + '/mediaplex/mojofb_v9.html', 'myProps["__load"]';
check_xss options[:root] + '/mixpo/framebust.html' ;
check_xss options[:root] + '/liquidus/iframeX.htm';
check_xss options[:root] + '/controbox/iframebuster.html';
check_xss options[:root] + '/spongecell/spongecell-spongecellbuster.html';
check_xss options[:root] + '/unicast/unicastIFD.html', 'creativeby1.unicast.com';
check_xss options[:root] + '/adrime/adrime_burst.2.0.0.htm' ;
check_xss options[:root] + '/revjet/revjet_buster.html';
check_xss options[:root] + '/kpsule/iframebuster.html', 'iframebuster.js';
