//@ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/resource/ResourceModel",
    "alfagroup/sapui5/model/Models",


],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     * @param {typeof sap.m.MessageToast} MessageToast 
    * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel 



     */
    function (Controller, MessageToast,ResourceModel,Models) {
        "use strict";


        return Controller.extend("alfagroup.sapui5.controller.HelloPanel", {

            onInit: function (){
                //set data model on the view
              
               this.getView().setModel(Models.createRecipient());

               // set i18n model on the view
               var i18nModel = new ResourceModel({ bundleName : "alfagroup.sapui5.i18n.i18n"});
                this.getView().setModel(i18nModel, "i18n");

            },


            onShowHello: function () {
                //read text from i18n model
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("hellloMsg", [sRecipient])
                MessageToast.show(sMsg);
            },

            onOpenDialog: function () {
                this.getOwnerComponent().openHelloDialog();
        }
        });

    });



