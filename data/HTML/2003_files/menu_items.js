var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/*
  --- menu items --- 
  note that this structure has changed its format since previous version.
  additional third parameter is added for item scope settings.
  Now this structure is compatible with Tigra Menu GOLD.
  Format description can be found in product documentation.
*/

  	 
  	 
var MENU_ITEMS = [
	['Flyers', '/', null,
		['This Week', '/flyerpage.asp'],	
		['All Upcoming', '/flyerpageall.asp'],	
		['Past Flyers', '/flyerarchive.asp'],
		['Flyer FAQ', '/faq_flyers.asp'],
	],
	['News', '/news.asp', null,
		['News Page', '/news.asp'],
		['News Archive', '/forum/forum_topics.asp?FID=20'],
		['Subit A News Item', '/faq_submissions.asp'],
	],
	['Shows', '/shows.asp', null,
		['Upcoming Shows', '/shows.asp'],
		['Search Past Shows', '/showsarchive.asp'],
		['Submit a Show', '/forum/forum_posts.asp?TID=5'],
	],
	['Bands', '/bands.asp', null,
		['Current Bands', '/bands.asp'],
		['Search', '/showsarchive.asp'],
		['Retired Bands', '/bandsarchive.asp'],
		['Add a Band', '/forum/forum_posts.asp?TID=3'],		
	],
	['Venues', '/venues.asp', null,
		['Venue Listing', '/venues.asp'],
	],
	['Reports', '/forum_topics.asp?FID=22', null,
		['Newer Reports', '/forum_topics.asp?FID=22'],
		['Older Reports', '/reports.asp'],
		['Become a Reporter', '/forum/forum_posts.asp?TID=5488'],
	],
	['Links', '/links.asp', null,
		['Info', '/links_info.asp'],
		['Booking', '/links_booking.asp'],
		['Bands', '/links_bands.asp'],
		['Venues', '/links_venues.asp'],
		['Businesses', '/links_localbiz.asp'],
		['Labels and Distros', '/links_distro.asp'],
		['Studios', '/links_studios.asp'],
		['Marketing', '/links_marketing.asp'],
		['Radio', '/links_radio.asp'],
		['Other Fun Stuff', '/links_fun.asp'],
	],
	['**Store**', '/catalog/index.php', null,
		['Buy Stuff!', '/catalog/index.php'],
	],
	['Forums', '/forum/default.asp', null,
		['Forums Main', '/forum/default.asp', null,
			['Music Discussion', '/forum/default.asp?C=4', null,
			  ['General Music Discussion', '/forum/forum_topics.asp?FID=1'],
			  ['Upcoming Shows', '/forum/forum_topics.asp?FID=32'],
			  ['Past Shows', '/forum/forum_topics.asp?FID=2'],
			  ['Upcoming Shows', '/forum/forum_topics.asp?FID=19'],
			  ['Past Shows', '/forum/forum_topics.asp?FID=29'],			  
			  ['Upcoming Shows', '/forum/forum_topics.asp?FID=3'],
			  ['Past Shows', '/forum/forum_topics.asp?FID=9'],			  
			],
			['Hosted Forums', '/forum/default.asp?C=10', null,
			  ['Rock 104', '/forum/forum_topics.asp?FID=8'],
			  ['Jay\'s Jumpstart', '/forum/forum_topics.asp?FID=3'],
			  ['V-Fest', '/forum/forum_topics.asp?FID=21'],
			  ['MoeFest', '/forum/forum_topics.asp?FID=17'],
			],
			['GB.com', '/forum/default.asp?C=7', null,
			  ['Submissions', '/forum/forum_topics.asp?FID=13'],
			  ['News', '/forum/forum_topics.asp?FID=20'],
			  ['Polls', '/forum/forum_topics.asp?FID=24'],
			  ['Reports', '/forum/forum_topics.asp?FID=22'],
			  ['Questions', '/forum/forum_topics.asp?FID=4'],
			  ['Updates', '/forum/forum_topics.asp?FID=14'],
			  ['Mod Lounge', '/forum/forum_topics.asp?FID=18'],
			],
			['Outer Realms', '/forum/default.asp?C=8', null,
			  ['The Void', '/forum/forum_topics.asp?FID=6'],
			  ['Single People', '/forum/forum_topics.asp?FID=5'],
			  ['Time Wasters', '/forum/forum_topics.asp?FID=16'],
			  ['Politicked Off', '/forum/forum_topics.asp?FID=15'],
			  ['Moron Room', '/forum/forum_topics.asp?FID=30'],
			  ['Champagne Room', '/forum/forum_topics.asp?FID=31'],
			],			
		],		
		['Active Topics', '/forum/active_topics.asp'],
		['Private Messenger', '/forum/pm_welcome.asp'],
		['Active Users', '/forum/active_users.asp'],		
	],

	['FAQs', '/forum/forum_topics.asp?FID=4', null,
		['Faqs', '/forum/forum_topics.asp?FID=4'],
		['the FAQdex!', '/forum/forum_posts.asp?TID=8156'],
		['Help GBdC', '/forum/forum_posts.asp?TID=5485'],
		['Contact Us', '/forum/forum_posts.asp?TID=5515'],
		['About GBdC', '/forum/forum_posts.asp?TID=5511'],
		['Submissions', null, null,
			['Shows', '/forum/forum_posts.asp?TID=5'],
			['Bands', '/forum/forum_posts.asp?TID=3'],
			['Flyers', '/forum/forum_posts.asp?TID=5487'],
			['Reports', '/forum/forum_posts.asp?TID=5488'],
			['News', '/forum/forum_posts.asp?TID=5269'],			
			
		],
	],
];



}
/*
     FILE ARCHIVED ON 00:54:41 Mar 06, 2005 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:28:43 Dec 27, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 675.95
  exclusion.robots: 0.076
  exclusion.robots.policy: 0.068
  cdx.remote: 0.063
  esindex: 0.008
  LoadShardBlock: 645.173 (3)
  PetaboxLoader3.datanode: 658.185 (4)
  CDXLines.iter: 14.184 (3)
  load_resource: 45.789
  PetaboxLoader3.resolve: 30.014
*/