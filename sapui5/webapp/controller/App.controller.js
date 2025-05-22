//@ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    //"sap/m/MessageToast",
    //"alfagroup/sapui5/model/Models",
   // "sap/ui/model/resource/ResourceModel"



],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     * @param {typeof sap.m.MessageToast} MessageToast 
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel 



     */
    function (Controller) {
        "use strict";


        return Controller.extend("alfagroup.sapui5.controller.App", {

           
            onOpenDialogHeader: function (){
                this.getOwnerComponent().openHelloDialog();
             
            }


    
        });

    });

