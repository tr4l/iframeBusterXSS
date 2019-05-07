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
  con = Faraday.new
  res = con.get do |req|
    req.url url
    req.headers['User-Agent'] = 'iframeBusterXSS - https://github.com/tr4l/iframeBusterXSS'
  end

  p "Checking the following url for existence and probable XSS: " + url
  if (res.success?) then
    if content.length == 0 then
      puts "  [/] " + url + " probable XSS"
    elsif (res.body =~ /#{Regexp.quote(content[0])}/) then
      puts "  [/] " + url + " probable XSS and matching content: " + content[0]
    end
  end
end

# Original discovery
check_xss options[:root] + '/predicta/predicta_bf.html', 'function getParam';
check_xss options[:root] + '/admotion/afa-iframe.htm', 'args.iq';
check_xss options[:root] + '/ipinyou/py_buster.html', 'bustJS';
check_xss options[:root] + '/rockabox/rockabox_buster.html', 'function getParameterByName';
check_xss options[:root] + '/undertone/iframe-buster.html';

# Added by google after original discovery
check_xss options[:root] + '/adform/IFrameManager.html', 'setIntervalXSS';
check_xss options[:root] + '/bonzai/bonzaiBuster.html','busting.js';
check_xss options[:root] + '/exponential/buster.html', 'e9.busted';
check_xss options[:root] + '/eyeblaster/addineyeV2.html','addineye.js';
check_xss options[:root] + '/eyewonder/interim.html', 'document.write(adUrl';
check_xss options[:root] + '/flashtalking/ftlocal.html', 'ftscript02.setAttribute';
check_xss options[:root] + '/jivox/jivoxibuster.html', 'initIBuster';
check_xss options[:root] + '/mediaplex/mojofb_v9.html', 'myProps["__load"]';
check_xss options[:root] + '/mixpo/framebust.html', 'bust.js' ;
check_xss options[:root] + '/liquidus/iframeX.htm', 'Liquidus BannerLink';
check_xss options[:root] + '/controbox/iframebuster.html'; # Typo ?
check_xss options[:root] + '/spongecell/spongecell-spongecellbuster.html' ; # Typo ?
check_xss options[:root] + '/unicast/unicastIFD.html', 'creativeby1.unicast.com';
check_xss options[:root] + '/adrime/adrime_burst.2.0.0.htm' ;
check_xss options[:root] + '/revjet/revjet_buster.html', 'ads.revjet.com';
check_xss options[:root] + '/kpsule/iframebuster.html', 'iframebuster.js';
check_xss options[:root] + '/adtech/iframeproxy.html', 'adtechIframeHashArray';
check_xss options[:root] + '/flite/fif.html', 'fliteHost';

# Found on some other website, so status are unknow
check_xss options[:root] + '/smartadserver/iframeout.html', 'iframeout.js';
check_xss options[:root] + '/saymedia/iframebuster.html', 'iframebuster.js';
check_xss options[:root] + '/knorex/knorex_psf.html', 'psf.js';
check_xss options[:root] + '/linkstorm/linkstorm_certified.html', 'Google is a Linkstorm-Certified Publisher';
check_xss options[:root] + '/liquidus/iframe.htm', 'Liquidus Bannerlink';
check_xss options[:root] + '/pointroll/PointRollAds.htm', 'psf.js';
check_xss options[:root] + '/sociomatic/iframebuster_Sociomantic.html';

# Typo - perhaps
check_xss options[:root] + '/contobox/iframebuster.html', 'getcode.js';
check_xss options[:root] + '/spongecell/spongecell-spongecell_buster.html', 'spongecell_iframebuster.js';

# Added from https://github.com/Automattic/Adbusters
check_xss options[:root] + '/_uac/adpage.html';
check_xss options[:root] + '/adcom/aceFIF.html';
check_xss options[:root] + '/adinterax/adx-iframe-v2.html';
check_xss options[:root] + '/atlas/atlas_rm.htm';
check_xss options[:root] + '/blogads/iframebuster-4.html';
check_xss options[:root] + '/checkm8/CM8IframeBuster.html';
check_xss options[:root] + '/cs-arIframe.htm';
check_xss options[:root] + '/gumgum/iframe_buster.html';
check_xss options[:root] + '/jpd/jpxdm.html';
check_xss options[:root] + '/oggifinogi/oggiPlayerLoader.htm';
check_xss options[:root] + '/rubicon/rp-smartfile.html';
check_xss options[:root] + '/xaxis/InfinityIframe.html';
check_xss options[:root] + '/gemius/gfbuster.html';

# Added from https://github.com/Automattic/vip-scanner/blob/master/vip-scanner/checks/AdBustersCheck.php
check_xss options[:root] + '/adcentric/ifr_b.html';
check_xss options[:root] + '/adinterax/adx-iframe-v2.html';
check_xss options[:root] + '/comscore/cs-arIframe.htm';
check_xss options[:root] + '/interpolls/pub_interpolls.html';
check_xss options[:root] + '/jpd/jpxdm.html';
check_xss options[:root] + '/mediamind/MMbuster.html';
check_xss options[:root] + '/undertone/UT_iframe_buster.html';

# other ?
check_xss options[:root] + '/ut_iframe_buster-html/', 'ut_ju';
