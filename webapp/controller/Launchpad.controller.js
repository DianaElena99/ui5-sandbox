sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/ui/core/routing/History"
], function (Controller, UIComponent, History) {
	"use strict";
	return Controller.extend("org.ubb.hw.controller.Detail", {
		onInit: function () {
			
		},

		onNavBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = UIComponent.getRouterFor(this);
				oRouter.navTo("login", {}, true);
			}
		},
        onInvoiceAppLaunch: function(){
            var oRouter = UIComponent.getRouterFor(this);
			oRouter.navTo("overview", {}, true);
        }
	});
});