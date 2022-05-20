sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/ui/core/UIComponent",
   "sap/ui/core/routing/History"
], function (Controller, UIComponent, History) {
   "use strict";
   return Controller.extend("org.ubb.hw.controller.App", {
      onOpenDialog : function () {
			this.getOwnerComponent().openHelloDialog();
		},
      onNavBack: function(){
         var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = UIComponent.getRouterFor(this);
				oRouter.navTo("launchpad", {}, true);
			}
      }
   });
});