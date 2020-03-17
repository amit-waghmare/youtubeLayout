	var Obj =[{"category":"Trending",
				"videos":[{"id":"0","vidtime":"7:04","vidtitle":"title1","vidchname":"Channel Name1","vidstats":"476k views - 2 hours ago"},
				{"id":"1","vidtime":"3:22","vidtitle":"title2","vidchname":"Channel Name2","vidstats":"1126k views - 3 hours ago"},
				{"id":"2","vidtime":"6:42","vidtitle":"title3","vidchname":"Channel Name3","vidstats":"4336k views - 3 hours ago"},
				{"id":"3","vidtime":"3:34","vidtitle":"title4","vidchname":"Channel Name4","vidstats":"636k views - 2 hours ago"},
				{"id":"4","vidtime":"9:14","vidtitle":"title5","vidchname":"Channel Name5","vidstats":"276k views - 1 hours ago"},
				{"id":"5","vidtime":"3:34","vidtitle":"title6","vidchname":"Channel Name6","vidstats":"936k views - 2 hours ago"},
				{"id":"6","vidtime":"9:14","vidtitle":"title7","vidchname":"Channel Name7","vidstats":"446k views - 1 hours ago"}]
			},
			{"category":"Trending2",
				"videos":[{"id":"0","vidtime":"7:04","vidtitle":"title8","vidchname":"Channel Name1","vidstats":"476k views - 2 hours ago"},
				{"id":"1","vidtime":"3:22","vidtitle":"title9","vidchname":"Channel Name2","vidstats":"1126k views - 3 hours ago"},
				{"id":"2","vidtime":"6:42","vidtitle":"title10","vidchname":"Channel Name3","vidstats":"4336k views - 3 hours ago"},
				{"id":"3","vidtime":"3:34","vidtitle":"title11","vidchname":"Channel Name4","vidstats":"636k views - 2 hours ago"},
				{"id":"4","vidtime":"9:14","vidtitle":"title12","vidchname":"Channel Name5","vidstats":"276k views - 1 hours ago"}]
			},
			{"category":"Trending3",
				"videos":[{"id":"0","vidtime":"7:04","vidtitle":"title8","vidchname":"Channel Name1","vidstats":"476k views - 2 hours ago"},
				{"id":"1","vidtime":"3:22","vidtitle":"title9","vidchname":"Channel Name2","vidstats":"1126k views - 3 hours ago"},
				{"id":"2","vidtime":"6:42","vidtitle":"title10","vidchname":"Channel Name3","vidstats":"4336k views - 3 hours ago"},
				{"id":"3","vidtime":"3:34","vidtitle":"title11","vidchname":"Channel Name4","vidstats":"636k views - 2 hours ago"},
				{"id":"4","vidtime":"9:14","vidtitle":"title12","vidchname":"Channel Name5","vidstats":"276k views - 1 hours ago"}]
			}]
var string ="";

var catString = "";
var mainString = "";

for(i=0; i<Obj.length; i++)
	{	string =  "";
		if(Obj[i].category !== null)
		{
			catString = '<h3 class="playlist__title">'+Obj[i].category+'</h3>';
		}
		if(Obj[i].videos !== null)
		{
			data = Obj[i].videos;
			for (j=0; j<data.length; j++) {
				string += '<div class="video"> <div class="video__thumbnail"> <span class="video__timestamp">'+data[j].vidtime+'</span></div><h4 class="video__title">'+data[j].vidtitle+'</h4><p class="video__channel-name">'+data[j].vidchname+'</p> <p class="video__stats">'+data[j].vidstats+'</p></div>'

				//string +='<div class="row"> <div class="col-xs-5"><span class="name">'+data[i].name+'</span></div><div class="col-xs-2"></div><div class="col-xs-5"><input type="number" class="percentage">'+data[i].percentage+'</div></div>';
				};

		}
		mainString += catString + '<div class="vidList">'+string+'</div>';
		
		
	}
	
document.getElementById('playlist').innerHTML ='<div class="playlist">'+mainString+'</div>';


