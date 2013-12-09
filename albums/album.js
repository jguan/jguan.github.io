// album
var MAX_TITLE_LENGTH = 17;

function showLatestAlbumsPhotos(json)
{
	showLatestAlbums(json, 100);
}

function showLatestAlbumsHome(json)
{
	showLatestAlbums(json, 6);
}

function showLatestAlbums(json, numAlbumsToFetch) 
{
	var albumsDiv = document.getElementById('picasa-albums');
	if (!json || !albumsDiv)
	{
		return;
	}
	
	// this functions reads all albumdata from the json-feed and stores it in array
	var numentries = json.feed.entry.length;
	
	if (numentries > 0)
	{
		var htmlOut = "";
		
		// main loop gets all the entries from the feed
		var end = Math.min(numentries, numAlbumsToFetch);
		for (var i = 0; i < end; i++) 
		{
			// get the entry from the feed
			var entry = json.feed.entry[i];

			// get the albumtitle from the entry
			var albumTitle = entry.title.$t;
			
			if (albumTitle.length > MAX_TITLE_LENGTH)
			{
				albumTitle = albumTitle.substring(0, MAX_TITLE_LENGTH) + "...";
			}
			
			// get the album url from the entry
			var albumUrl;
			for (var k = 0; k < entry.link.length; k++) 
			{
				if (entry.link[k].rel == 'alternate') 
				{
					albumUrl = entry.link[k].href;
					break;
				}
			}

			// get the album thumbnail from the entry
			var albumThumbnail = entry.media$group.media$thumbnail[0].url;
			
			var altText = 'Click to view the ' + albumTitle + ' album';
			
			htmlOut += '<div class="album">';
			htmlOut += '<div class="thumb"><a href="' + albumUrl + '" target="_blank" rel="nofollow"><img src="' + albumThumbnail + '" alt="' + altText + '" title="' + altText + '"/></a></div>';
			htmlOut += '<div><a href="' + albumUrl +'" target="_blank" rel="nofollow">' + albumTitle + '</a></div>';
			htmlOut += '</div>';
		}
		
		albumsDiv.innerHTML = htmlOut;
	}
}
