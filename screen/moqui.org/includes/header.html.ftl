<#--  TODO: add in similar logic from original header file to determine active navigation item and apply active styling  -->
<#--  TODO: maybe combine all css files into one instead of multiple files - not sure if that is really beneficial or not  -->
<head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Guru Nanak Dwara Home</title>
        <link href="/newhere.css" rel="stylesheet">
        <link href="/main.css" rel="stylesheet">
        <link href="/index.css" rel="stylesheet">
        <link href="/events.css" rel="stylesheet">
        <link href="/contact.css" rel="stylesheet">
        <link href="/startserving.css" rel="stylesheet">
        <link href="/donate.css" rel="stylesheet">
        <link href="/photos.css" rel="stylesheet">

        <link rel="image_src" type="image/png" href="/images/gnd-image-src.png">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
        <#--  <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">  -->
        <meta property="og:image" content="/images/gnd-image-src.png">
        <meta name="twitter:image" content="/images/gnd-image-src.png"><!-- Google Tag Manager -->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-NRMZ36R');</script><!-- End Google Tag Manager -->
        <script src="js/hyperform.min.js"></script>
        <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
        </head>
    <body>
        <header class="header" id="header">
            <div class="contact-links">
                <div class="max-width">
                    <a href="tel:1-602.632.9598" class="call">
                        <span>Call Now</span>
                        <i class="fa fas fa-phone fa-fw"></i>
                    </a>
                    <a href="/contact.html" class="contact">
                        <span>Contact Us</span>
                        <i class="far fa-envelope fa-fw"></i>
                    </a>
                    <a href="https://www.google.com/maps/place/Guru+Nanak+Dwara/@33.4754179,-112.0654331,14.37z/data=!4m5!3m4!1s0x872b125f9d3f800b:0x4952a3dc1c4406b7!8m2!3d33.4733031!4d-112.0621051" target="_blank" class="directions">
                        <span>Directions</span>
                        <i class="fas fa-map-marker-alt fa-fw"></i>
                    </a>
                </div>
            </div>
            <div class="main-navigation">
                <div class="max-width">
                    <div class="logo-hamburger-donate">
                        <a href="/" class="logo-link">
                            <img src="/images/guru.png" alt="Guru Nanak Dwara" class="logo">
                        </a>
                        <div class="hamburger-and-donate">
                            <div class="hamburger" aria-expanded="false" data-node-name="hamburgerNode">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <a href="/donateform.html" class="donate">Donate</a>
                        </div>
                    </div>
                    <nav class="vertical-navigator" role="navigation" data-node-name="verticalNavigatorNode">
                        <ul class="navigator-links">
                            <li<#if menu_active! == "home"> class="active-item"</#if>>
                                <a href="/" class="nav-link">
                                    <span>Home</span>
                                </a>
                            </li>
                            <li<#if menu_active! == "newhere"> class="active-item"</#if>>
                                <a href="/newhere.html" class="nav-link">
                                    <span>New Here</span>
                                </a>
                            </li>
                            <li<#if menu_active! == "events"> class="active-item"</#if>>
                                <a href="/events.html" class="nav-link">
                                    <span>Events</span>
                                </a>
                            </li>
                             <#--  <li id="calendarNavItem">
                                <a href="/events.html#calendar" class="nav-link">
                                    <span>Calendar</span>
                                </a> 
                            </li>  -->
                            <li<#if menu_active! == "startserving"> class="active-item"</#if>>
                                <a href="/startserving.html" class="nav-link">
                                    <span>Start Serving</span>
                                </a>
                            </li>
                            <li<#if menu_active! == "photos"> class="active-item"</#if>>
                                <a href="/photos.html" class="nav-link">
                                    <span>Photos</span>
                                </a>
                            </li>
                        </ul>
                        <p class="social-media-links">
                            <a href="https://www.facebook.com/gurunanakdwara/" title="GND Facebook Page" target="_blank">
                                <i class="fab fa-facebook-square"></i>
                            </a>
                            <a href="https://www.instagram.com/gurunanakdwara/" title="GND Instagram Page" target="_blank">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.youtube.com/c/GuruNanakDwara" title="GND YouTube Channel" target="_blank">
                                <i class="fab fa-youtube"></i>
                            </a>
                            <a href="https://twitter.com/gurunanakdwara" title="GND Twitter Page" target="_blank">
                                <i class="fab fa-twitter-square"></i>
                            </a>
                        </p>
                    </nav>
                </div>
            </div>
        </header>