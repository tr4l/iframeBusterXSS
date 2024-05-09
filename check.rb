#!/usr/bin/ruby

require 'faraday'
require 'optparse'
require 'logger'

$logger = Logger.new(STDOUT)
$logger.level = Logger::WARN
options = {}
OptionParser.new do |parser|
  parser.on("-r", "--root ROOT",
            "http/https ROOT path you want to check like: http://perdu.com") do |root|
    puts "Root path: #{root}"
    options[:root] = root;
  end
end.parse!


def check_xss(root , path, *content)
  con = Faraday.new
  res = con.get do |req|
    req.url root + path
    req.headers['User-Agent'] = 'iframeBusterXSS - https://github.com/tr4l/iframeBusterXSS'
    #req.headers['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36'
  end

  $logger.info("Checking the following file: " + path)
  if (res.success?) then
    #p res.body
    if content.length == 0 then
      puts "  [/] " + root + path + " probable XSS"
    elsif (res.body =~ /#{Regexp.quote(content[0])}/) then
      puts "  [/] " + root + path + " probable XSS and matching content: " + content[0]
    end
  end
  # Check for the same file lower in path as apparently some people missplaced the files
  if (path.match(/\/\K.*/))
    check_xss root, $&, *content
  end
end
# Original discovery
check_xss options[:root], 'predicta/predicta_bf.html', 'function getParam';
check_xss options[:root], 'admotion/afa-iframe.htm', 'args.iq';
check_xss options[:root], 'ipinyou/py_buster.html', 'bustJS';
check_xss options[:root], 'rockabox/rockabox_buster.html', 'function getParameterByName';
check_xss options[:root], 'undertone/iframe-buster.html' 'undertone.com';

# Added by google after original discovery
check_xss options[:root], 'adform/IFrameManager.html', 'setIntervalXSS';
check_xss options[:root], 'bonzai/bonzaiBuster.html','busting.js';
check_xss options[:root], 'exponential/buster.html', 'e9.busted';
check_xss options[:root], 'eyeblaster/addineyeV2.html','addineye.js';
check_xss options[:root], 'eyewonder/interim.html', 'document.write(adUrl';
check_xss options[:root], 'flashtalking/ftlocal.html', 'ftscript02.setAttribute';
check_xss options[:root], 'jivox/jivoxibuster.html', 'initIBuster';
check_xss options[:root], 'mediaplex/mojofb_v9.html', 'myProps["__load"]';
check_xss options[:root], 'mixpo/framebust.html', 'bust.js' ;
check_xss options[:root], 'liquidus/iframeX.htm', 'Liquidus BannerLink';
check_xss options[:root], 'controbox/iframebuster.html'; # Typo ?
check_xss options[:root], 'spongecell/spongecell-spongecellbuster.html' ; # Typo ?
check_xss options[:root], 'unicast/unicastIFD.html', 'creativeby1.unicast.com';
check_xss options[:root], 'adrime/adrime_burst.2.0.0.htm' , 'adrime_burst.js';
check_xss options[:root], 'revjet/revjet_buster.html', 'ads.revjet.com';
check_xss options[:root], 'kpsule/iframebuster.html', 'iframebuster.js';
check_xss options[:root], 'adtech/iframeproxy.html', 'adtechIframeHashArray';
check_xss options[:root], 'flite/fif.html', 'fliteHost';

# Found on some other website, so status are unknow
check_xss options[:root], 'smartadserver/iframeout.html', 'iframeout.js';
check_xss options[:root], 'saymedia/iframebuster.html', 'iframebuster.js';
check_xss options[:root], 'knorex/knorex_psf.html', 'psf.js';
check_xss options[:root], 'linkstorm/linkstorm_certified.html', 'Google is a Linkstorm-Certified Publisher';
check_xss options[:root], 'liquidus/iframe.htm', 'Liquidus Bannerlink';
check_xss options[:root], 'pointroll/PointRollAds.htm', 'psf.js';
check_xss options[:root], 'sociomatic/iframebuster_Sociomantic.html';

# Typo - perhaps
check_xss options[:root], 'contobox/iframebuster.html', 'getcode.js';
check_xss options[:root], 'spongecell/spongecell-spongecell_buster.html', 'spongecell_iframebuster.js';
# Added from https://github.com/Automattic/Adbusters
check_xss options[:root], '_uac/adpage.html', 'Aol Advertisement';
check_xss options[:root], 'adcom/aceFIF.html', 'aceFIF.js';
check_xss options[:root], 'atlas/atlas_rm.htm', 'newIframeScript.js';
check_xss options[:root], 'blogads/iframebuster-4.html';
check_xss options[:root], 'checkm8/CM8IframeBuster.html', 'cm8adam_iframe_buster_in.js';
check_xss options[:root], 'comscore/cs-arIframe.htm', '(survey-poll|voicefive)';
check_xss options[:root], 'gumgum/iframe_buster.html', 'ib.js';
check_xss options[:root], 'jpd/jpxdm.html', 'jpiframe.js';
check_xss options[:root], 'oggifinogi/oggiPlayerLoader.htm','<title>Frame Booster</title>';
# Seems safe
#check_xss options[:root], 'rubicon/rp-smartfile.html';
check_xss options[:root], 'xaxis/InfinityIframe.html','<title>Xaxis</title>';
check_xss options[:root], 'gemius/gfbuster.html', 'gfbuster.js';

# Added from https://github.com/Automattic/vip-scanner/blob/master/vip-scanner/checks/AdBustersCheck.php
check_xss options[:root], 'adcentric/ifr_b.html','media.adcentriconline.com';
check_xss options[:root], 'adinterax/adx-iframe-v2.html', 'escape(p[i])';
check_xss options[:root], 'interpolls/pub_interpolls.html';
check_xss options[:root], 'jpd/jpxdm.html', 'ads.jetpackdigital.com';
check_xss options[:root], 'mediamind/MMbuster.html';
check_xss options[:root], 'undertone/UT_iframe_buster.html', 'undertone.com';

# Added from https://gist.github.com/pricejn2/9788264
check_xss options[:root], 'eyereturn/eyereturn.html', 'voken.eyereturn.com';
check_xss options[:root], 'unicast/UnicastIframe.html', 'cache.unicast.com';
check_xss options[:root], 'viewpoint/vwpt.html', 'viewpoint.com';

# other ?
check_xss options[:root], 'videoegg/vedoc.html', 'Missing tagid and tagurl';
check_xss options[:root], 'ifrm/cwfl.htm', 'tag.contextweb.com/TagPublish/GetAd.js';
check_xss options[:root], 'tribalfusion/tfBuster_telegraph.html', 'tribalfusion.com';
check_xss options[:root], 'safecount/GateFile.html', 'dynamiclink.js.php';
check_xss options[:root], 'klipmart/km_ss.html', 'http://gfx.dvlabs.com/';
check_xss options[:root], 'appnexus/aniframe.html', 'adnxsCdnUrl';
check_xss options[:root], 'ut_iframe_buster-html/', 'ut_ju';
check_xss options[:root], 'doubleclick/DARTIframe.html', 'gtVersion';
check_xss options[:root], 'doubleclick/fif.html';
check_xss options[:root], 'doubleclick/adx_iframe.html', 'adx_iframe.js';
check_xss options[:root], 'pictela/Pictela_iframeproxy.html';
check_xss options[:root], '3lift.html'; # Should probably not be in root, link to ib.3lift.com
check_xss options[:root], 'isocket.html'; # Same, link to d.adsbyisocket.com
# check_xss options[:root], 'maxtest.html'; # 

# http://rt.liftdna.com/liftrtb_4.js
# 2024 ...
check_xss options[:root], 'ftlocal/IFrameBuster.html', 'adsParams';
