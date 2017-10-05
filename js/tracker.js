/**

Author : Siddharth Patel
Developed for Zoomcar UI challenge 

Email id : sidpatel789@gmail.com

*/
(function($){

	var Tracker = {

		init : function(){
			var couriers = {"parcels":[{"name":"Airwick Aroma Oil","image":"http:\/\/n2.sdlcdn.com\/imgs\/a\/r\/o\/Airwick-Aroma-Oil-Refill-Pack-SDL286969364-12-2ac2e.jpg","date":"1440937805","type":"household","weight":"0.6kg","phone":"9188917479","price":"274","quantity":"2","color":"#FF4747","link":"https:\/\/www.google.co.in\/search?q=Airwick+Aroma+Oil&oq=Airwick+Aroma+Oil","live_location":{"latitude":12.939343,"longitude":77.608738}},{"name":"Canon EOS 6D","image":"http:\/\/n3.sdlcdn.com\/imgs\/a\/i\/q\/Canon-EOS-6D-DSLR-24-1767357-1-1b0fd.jpg","date":"1441252983","type":"Camera","weight":"0.77kg","phone":"8585602424","price":"142034","quantity":"1","color":"#7A7171","link":"https:\/\/www.google.co.in\/search?q=Canon+EOS+6D&oq=Canon+EOS+6D","live_location":{"latitude":18.532067,"longitude":73.846449}},{"name":"Vegetable Chopper","image":"http:\/\/n3.sdlcdn.com\/imgs\/a\/3\/l\/Noorstore-Green-Vegetable-Chopper-SDL823034672-1-f0e72.jpg","date":"1441414923","type":"household","weight":"0.3kg","phone":"8904937790","price":"601","quantity":"1","color":"#B0F542","link":"https:\/\/www.google.co.in\/search?q=Green+Vegetable+Chopper&oq=Green+Vegetable+Chopper","live_location":{"latitude":19.077316,"longitude":72.875882}},{"name":"Calvin Klein One","image":"http:\/\/n1.sdlcdn.com\/imgs\/a\/i\/g\/Calvin-Klein-One-Shock-200-SDL115301666-1-f1f27.jpg","date":"1440922026","type":"Fragrances","weight":"0.6kg","phone":"7127012954","price":"5874","quantity":"3","color":"#FC9FEB","link":"https:\/\/www.google.co.in\/search?q=Calvin+Klein+One+Shock&oq=Calvin+Klein+One+Shock","live_location":{"latitude":28.620839,"longitude":77.202121}},{"name":"Note 4 32GB","image":"http:\/\/n1.sdlcdn.com\/imgs\/a\/o\/3\/Samsung-Note-4-White--SDL740147488-1-1b4b0.jpg","date":"1441854245","type":"Electronics","weight":"0.4kg","phone":"7669153149","price":"40999","quantity":"1","color":"#FFFFFF","link":"https:\/\/www.google.co.in\/search?q=note+4&oq=note+4#safe=active&q=note+4+white","live_location":{"latitude":13.084266,"longitude":80.267423}},{"name":"Mac Mini MGEQ2HN\/A","image":"http:\/\/n4.sdlcdn.com\/imgs\/a\/o\/0\/Apple-MGEQ2HN-A-Mac-Mini-SDL876750836-2-72cf1.jpg","date":"1441966830","type":"Electronics","weight":"1.3kg","phone":"9101934568","price":"68,352","quantity":"1","color":"#B3B3B3","link":"https:\/\/www.google.co.in\/search?q=mac+mini+MGEQ2HN%2FA&oq=mac+mini+MGEQ2HN%2FA","live_location":{"latitude":22.575191,"longitude":88.360126}},{"name":"Pebble Steel Smart Watch","image":"http:\/\/n3.sdlcdn.com\/imgs\/a\/1\/1\/Pebble-Steel-Smart-Watch-SDL174768273-1-0b969.jpg","date":"1440922811","type":"Electronics","weight":"0.1kg","phone":"8705493055","price":"10000","quantity":"1","color":"#E3CB9F","link":"https:\/\/www.google.co.in\/search?q=pebble+time&oq=pebble+time","live_location":{"latitude":24.822536,"longitude":93.930916}},{"name":"TRESemme Shampoo","image":"http:\/\/n4.sdlcdn.com\/imgs\/a\/l\/j\/Tresemme-Keratin-Smooth-Shampoo-600-SDL506080572-1-be887.jpg","date":"1441069261","type":"household","weight":"1.28kg","phone":"8616815050","price":"800","quantity":"2","color":"#E36F6F","link":"https:\/\/www.google.co.in\/search?q=TRESemme+Keratin+Smooth&oq=TRESemme+Keratin+Smooth","live_location":{"latitude":34.154586,"longitude":77.575053}},{"name":"Raspberry Pi 2","image":"http:\/\/n2.sdlcdn.com\/imgs\/a\/l\/7\/Raspberry-Pi-Model-B-Plus-SDL455674881-1-03d82.jpg","date":"1441879810","type":"Electronics","weight":"0.4kg","phone":"7655409333","price":"10400","quantity":"4","color":"#2F8035","link":"https:\/\/www.google.co.in\/search?q=raspberry+pi+1gb+quad+core&oq=raspberry+pi+1gb+quad+core","live_location":{"latitude":32.227342,"longitude":76.315104}},{"name":"Dell U2414H 24\"","image":"http:\/\/n4.sdlcdn.com\/imgs\/a\/j\/e\/Dell-UltraSharp-U2414H-24-Inches-SDL219157743-1-38eef.JPG","date":"1441879810","type":"Electronics","weight":"3.61kg","phone":"9257743914","price":"18950","quantity":"1","color":"#EBF0EB","link":"https:\/\/www.google.co.in\/search?q=U2414H&oq=U2414H","live_location":{"latitude":15.337874,"longitude":73.894585}},{"name":"JBL Flip 2","image":"http:\/\/n4.sdlcdn.com\/imgs\/a\/i\/t\/JBL-Flip-2-Wireless-Portable-SDL028764616-1-a7991.jpg","date":"1441879810","type":"Electronics","weight":"0.3kg","phone":"8170886462","price":"5400","quantity":"1","color":"#3A63E8","link":"https:\/\/www.google.co.in\/search?q=jbl+flip+ii+blue&oq=jbl+flip+ii+blue","live_location":{"latitude":11.914253,"longitude":79.805665}}]};
			this.setCourierIds(couriers);
			this.getApiHits();
			this.getNumberOfCouriers();
			var cl = this.getCouriresList();
			this.displayCourierList(cl);
			this.getCourierDetails(0);
		},

		setCourierIds : function(couriers){
			if(couriers){
				$.each(couriers,function(k,v){
					for(var i=0; i < v.length; i++){
						v[i]['id'] = i;
					}
				});

				Tracker['couriers'] = couriers;
			}
		},

		addNewCourier : function(name,image,type,quantity,value,color,date,current_location,link,phone,price){
			
			var newParcel = {
				'name' 				: name,
				'image' 			: image,
				'type' 				: type,
				'quantity' 			: quantity,
				'value' 			: value,
				'color' 			: color,
				'date' 				: date,
				'current_location'  : current_location,
				'link'				: link,
				'phone'				: phone,
				'price'				: price
			};

			var cl = this.getCouriresList();
			$.each(cl,function(k,v){
				length = v.length;
				newParcel['id'] = length;
				v.push(newParcel);
			});

		},

		getCouriresList : function(){
			return Tracker['couriers'];
		},

		getNumberOfCouriers : function(){
			var cl = this.getCouriresList();
			var length;
			$.each(cl,function(k,v){
				length = v.length;
			});

			this.setPageIdVariables("total_parcels" , length);

			return length;
		},

		getApiHits : function(){
			var rand = Math.round(Math.random()*1000);
			this.setPageIdVariables("api_hits" , rand)
		},

		displayCourierList : function(cl){
			if(cl){
				var clStr = "";
				$.each(cl,function(k,v){
					for(var i=0; i < v.length; i++){
						clStr += "<div class='courier_item' id='courier_item_"+v[i].id+"' onclick='tracker.getCourierDetails("+v[i].id+")'>";
						clStr += "<i class='fa fa-star'></i>";
						clStr += "<span id='courier_name'>"+v[i].name+"</span>";
						clStr += "<span id='courier_price'><i class='fa fa-inr'></i> "+v[i].price+"</span>"
						clStr += "</div>";
					}
				});

				this.setPageIdVariables('courier_list', clStr);
			}
		},

		sort : function(type){

			if(type == 1){
				type = 'price';
			} else if(type == 2){
				type = 'weight';
			} else {
				return;
			}

			var cl = this.getCouriresList();
			var tempArr;
			var clArray;
			$.each(cl,function(k,v){
				clArray = v;
			});

			tempArr = clArray.sort(function(a , b){
				return parseInt(a['type']) - parseInt(b['type']);
			});

			var tempObj = {
				"parcels" : tempArr
			}


			this.displayCourierList(tempObj);

		},

		search : function(){
			var text = $("#search_parcel").val();
			var cl = this.getCouriresList();

			var tempArr = [];
			var tempObj = {};

			if(text){
				$.each(cl,function(k,v){
					for(var i=0; i < v.length; i++){
						if(v[i].name.indexOf(text) > -1){
							tempArr.push(v[i]);
						} else if(v[i].price == text){
							tempArr.push(v[i]);
						} else if(v[i].weight == text+"kg"){
							tempArr.push(v[i]);
						} else if(v[i].weight == text){
							tempArr.push(v[i]);
						} else if(v[i].phone == text){
							tempArr.push(v[i]);
						}
					}
				});

				tempObj = {
					"parcels" : tempArr
				};

				this.displayCourierList(tempObj);

			} else {
				this.displayCourierList(cl);
			}
		},

		getCourierDetails : function(id){
			$(".courier_item").removeClass('courier-item-selected');
			$("#courier_item_"+id).addClass('courier-item-selected');

			var selectedItem;
			var cl = this.getCouriresList();
			$.each(cl,function(k,v){
				for(var i=0; i < v.length; i++){
					if(v[i].id == id){
						selectedItem = v[i];
						break;
					}
				}
			});

			var selectedItemImage = "<img class='img img-circle' src='"+selectedItem['image']+"' />";
			var selectedItemDate  = selectedItem['date'];
			var selectedItemName  = selectedItem['name'];
			var selectedItemType  = "<i class='fa fa-shopping-cart' title='Courier type'></i> " + selectedItem['type'];
			var selectedItemPrice = "<i class='fa fa-inr' title='Amount in Rupees'></i> " + selectedItem['price'];
			var selectedItemWt	  = "<i class='fa fa-database' title='weight'></i> " + selectedItem['weight'];
			var selectedItemQty   = "<i class='fa fa-fire' title='Quantity'></i> " + selectedItem['quantity'];
			var selectedItemPhone = "<i class='fa fa-phone-square' title='Phone'></i> " + selectedItem['phone'];
			var selectedItemColor = "<span class='small-box-color' style=';background-color:"+selectedItem['color']+"' title='Color'> Color </span>";

			var selectedItemLat = selectedItem['live_location']['latitude'];
			var selectedItemLng = selectedItem['live_location']['longitude'];

			var d = new Date(parseInt(selectedItemDate));
			var eta = "ETA :" + d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear();


			this.setPageIdVariables('courier_item_image' , selectedItemImage);
			this.setPageIdVariables('courier_item_date' , eta);
			this.setPageIdVariables('courier_item_name' , selectedItemName);
			this.setPageIdVariables('courier_item_type' , selectedItemType);
			this.setPageIdVariables('courier_item_price' , selectedItemPrice);
			this.setPageIdVariables('courier_item_weight' , selectedItemWt);
			this.setPageIdVariables('courier_item_qty' , selectedItemQty);
			this.setPageIdVariables('courier_item_phone' , selectedItemPhone);
			this.setPageIdVariables('courier_item_color' , selectedItemColor);

			this.setMapLocation(selectedItemLat , selectedItemLng);

		},

		setPageIdVariables : function(id , value){
			$("#"+id).html(value);
		},

		setMapLocation : function(lat , lng){
			var image = 'http://www.google.com/intl/en_us/mapfiles/ms/micons/blue-dot.png';
			var mapOptions = {
	             center: new google.maps.LatLng(lat, lng),
	             zoom: 13,
	             mapTypeId: google.maps.MapTypeId.ROADMAP,
	             panControl: true,
	             panControlOptions: {
	                 position: google.maps.ControlPosition.TOP_RIGHT
	             },
	             zoomControl: true,
	             zoomControlOptions: {
	                 style: google.maps.ZoomControlStyle.LARGE,
	                 position: google.maps.ControlPosition.TOP_left
	             }
	         },
	         map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions),
	             marker = new google.maps.Marker({
	                 position: latlng,
	                 map: map,
	                 icon: image
	             });

		         var input = document.getElementById('searchTextField');
		         var autocomplete = new google.maps.places.Autocomplete(input, {
		             types: ["geocode"]
		         });

		         autocomplete.bindTo('bounds', map);
		         var infowindow = new google.maps.InfoWindow();

		         google.maps.event.addListener(autocomplete, 'place_changed', function (event) {
		             infowindow.close();
		             var place = autocomplete.getPlace();
		             if (place.geometry.viewport) {
		                 map.fitBounds(place.geometry.viewport);
		             } else {
		                 map.setCenter(place.geometry.location);
		                 map.setZoom(17);
		             }

		             moveMarker(place.name, place.geometry.location);
		             $('.MapLat').val(place.geometry.location.lat());
		             $('.MapLon').val(place.geometry.location.lng());
		         });
		         google.maps.event.addListener(map, 'click', function (event) {
		             $('.MapLat').val(event.latLng.lat());
		             $('.MapLon').val(event.latLng.lng());
		             infowindow.close();
		                     var geocoder = new google.maps.Geocoder();
		                     geocoder.geocode({
		                         "latLng":event.latLng
		                     }, function (results, status) {
		                         console.log(results, status);
		                         if (status == google.maps.GeocoderStatus.OK) {
		                             console.log(results);
		                             var lat = results[0].geometry.location.lat(),
		                                 lng = results[0].geometry.location.lng(),
		                                 placeName = results[0].address_components[0].long_name,
		                                 latlng = new google.maps.LatLng(lat, lng);

		                             moveMarker(placeName, latlng);
		                             $("#searchTextField").val(results[0].formatted_address);
		                         }
		                     });
		         });
		        
		         function moveMarker(placeName, latlng) {
		             marker.setIcon(image);
		             marker.setPosition(latlng);
		             infowindow.setContent(placeName);
		             //infowindow.open(map, marker);
		         }
		}


	};

	window.tracker = Tracker;
})(jQuery);