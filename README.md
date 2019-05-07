# iframeBusterXSS
Check for know iframeBuster XSS

# Timeline
- Original issue discovred by myself: https://seclists.org/fulldisclosure/2017/Dec/68
- Couple of day after, google warn user: https://support.google.com/admanager/answer/7622991
- Article: https://www.securityweek.com/google-warns-doubleclick-customers-xss-flaws
A couple of month later: 
- https://randywestergren.com/xss-vulnerabilities-in-multiple-iframe-busters-affecting-top-tier-sites/
- https://blog.detectify.com/2018/10/04/iframe-busters-lead-to-xss/
Today:
- Still nothing to detect them ?
# Instalation
    $ gem install faraday
    $ gem install optparse
    $ git clone https://github.com/tr4l/iframeBusterXSS.git
    
# Usage
    $ ./check.rb -r http://perdu.com


 
