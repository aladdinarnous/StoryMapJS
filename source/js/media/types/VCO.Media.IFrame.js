/*	VCO.Media.IFrame
================================================== */

VCO.Media.IFrame = VCO.Media.extend({
	
	includes: [VCO.Events],
	
	/*	Load the media
	================================================== */
	loadMedia: function() {
		var api_url,
			self = this;
		
		// Loading Messege
		this.messege.updateMessege(VCO.Language.messeges.loading + " iFrame");
		
		// Create Dom element
		this._el.content_item	= VCO.Dom.create("div", "vco-media-item vco-media-iframe", this._el.content);
		
		// Get Media ID
		this.media_id = this.data.url;
		
		// API URL
		api_url = this.media_id;
		
		// API Call
		this._el.content_item.innerHTML = api_url;
		
		// After Loaded
		this.onLoaded();
	},
	
	// Update Media Display
	_updateMediaDisplay: function() {
		this._el.content_item.style.height = this.options.height + "px";
	}
	
});
