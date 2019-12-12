 <footer class="footer">
            <div class="max-width row row-flush">
                <section class="footer-subscribe col-md-6">
                    <em>Subscribe to our mailing list</em>
                    <div id="mc_embed_signup">
                        <form action="https://gurunanakdwara.us15.list-manage.com/subscribe/post?u=ee82e1fff8069f58d7029d8fe&amp;id=8a4b08d5c6" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                            <div id="mc_embed_signup_scroll">
                                <div class="mc-field-group">
                                    <div class="email-and-button">
                                        <input type="email" value name="EMAIL" class="required email" id="mce-EMAIL" placeholder="E-Mail Address">
                                        <button input type="submit" name="subscribe" id="mc-embedded-subscribe" class="submit button">Subscribe</button>
                                    </div>
                                </div>
                                <div id="mce-responses" class="clear">
                                    <div class="response" id="mce-error-response" style="display: none"></div>
                                    <div class="response" id="mce-success-response" style="display: none"></div>
                                </div><!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                                <div style="position: absolute; left: -5000px;" aria-hidden="true">
                                    <input type="text" name="b_ee82e1fff8069f58d7029d8fe_8a4b08d5c6" tabindex="-1" value>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
                <nav class="footer-nav col-md-6">
                    <table>
                        <tr>
                            <td>
                                <a href="/">Home</a>
                            </td>
                            <td>
                                <a href="/events.html">Events</a>
                            </td>
                            <td colspan="2">
                                <a href="/startserving.html">Start Serving</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a href="/newhere.html">New Here</a>
                            </td>
                            <#--  <td>
                                <a href="/events.html#calendar">Calendar</a>
                            </td>  -->
                            <td>
                                <a href="/photos.html">Photos</a>
                            </td>
                            <td class="contact">
                                <a href="/contact.html">Contact Us</a>
                            </td>
                        </tr>
                    </table>
                </nav>
                <section div class="footer-connect col-md-6">
                    <em>Connect With Us</em>
                    <div class="flex">
                        <a href="/donateform.html" class="donate">Donate</a>
                        <a href="https://www.facebook.com/gurunanakdwara/" class="social-media" title="GND Facebook Page" target="_blank">
                            <i class="fab fa-facebook-square"></i>
                        </a>
                        <a href="https://www.instagram.com/gurunanakdwara/" class="social-media" title="GND Instagram Page" target="_blank">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.youtube.com/c/GuruNanakDwara" class="social-media" title="GND YouTube Channel" target="_blank">
                            <i class="fab fa-youtube"></i>
                        </a>
                        <a href="https://twitter.com/gurunanakdwara" class="social-media" title="GND Twitter Page" target="_blank">
                            <i class="fab fa-twitter-square"></i>
                        </a>
                    </div>
                </section>
            </div>
        </footer>
        <script>
if (window.matchMedia("(min-width: 768px)").matches) {

				const videoWrapper = document.getElementById('desktopVideoTarget');

				const youtubeVideoID = 'FB0VVAVyl_g';
				const youtubeIframeString = '<iframe src="https://www.youtube.com/embed/' + youtubeVideoID + '?mute=1&rel=0&controls=0&showinfo=0&autoplay=1&loop=1&playlist=' + youtubeVideoID + '" frameborder="0"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
				videoWrapper.innerHTML = youtubeIframeString;

				function hideHeader() {
					const theHeader = document.getElementById('header');
					theHeader.classList.add('hide-nav-bar');
				}

				hideHeader();	//hide on load

				function showHeader() {
					const theHeader = document.getElementById('header');
					theHeader.classList.remove('hide-nav-bar');
				}

				var supportsWheel = false;

				function hideShowHeader(e) {

					if (e.type == "wheel") supportsWheel = true;
					else if (supportsWheel) return;

					var delta = ((e.deltaY || -e.wheelDelta || e.detail) >> 10) || 1;

					if ((delta > 0)) {
						showHeader();
					}
				}

				document.addEventListener('wheel', hideShowHeader);
				document.addEventListener('mousewheel', hideShowHeader);
				document.addEventListener('DOMMouseScroll', hideShowHeader);
			}
            
		</script>
        <script src="js/main.js"></script>
        <script src="js/donate.js"></script>
    </body>
</html>
