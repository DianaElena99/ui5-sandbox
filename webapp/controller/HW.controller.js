sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel",
	"sap/ui/core/Fragment"
 ], function (Controller, MessageToast, JSONModel,Fragment) {
    "use strict";
    return Controller.extend("org.ubb.hw.controller.HW", {
      onInit : function () {
        // set data model on view
        var oData = {
           recipient : {
              name : "World",
              asd : "aaaa"
           }
        };
        var oModel = new JSONModel(oData);
        this.getView().setModel(oModel);
     },
      onShowHello : function () {
			// read msg from i18n model
      var oBundle = this.getView().getModel("i18n").getResourceBundle();
      var sRecipient = this.getView().getModel().getProperty("/recipient/name");
      var sMsg = oBundle.getText("helloMsg", [sRecipient]);
      // show message
      MessageToast.show(sMsg);
    },
		onOpenDialog : function () {
			this.getOwnerComponent().openHelloDialog();
		}
    });
 });