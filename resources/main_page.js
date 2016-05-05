// ==========================================================================
// Project:   Images - mainPage
// Copyright: @2016 My Company, Inc.
// ==========================================================================
/*globals Images */

// This page describes the main user interface for your application.
Images.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page
  // load.
  mainPane: SC.MainPane.design({
    childViews: ['normalImage', 'arrowView', 'controlView', 'scaleButton', 'scaleShadowImage', 'scaleImage'],

    normalImage: SC.ImageView.extend({
      classNames: ['unscale-image'],
      layout: { border:1, left: -350, centerY: 0, width: 650, height: 432 },
      placeholder: 'loading',
      value: sc_static('fjola.jpg')

    }),

    arrowView: SC.ImageView.extend({
      layout: { left: 150, width: 320, height: 180, centerY: 0 },
      value: 'arrow'
    }),

    scaleButton: SC.SegmentedView.extend({
      controlSize: SC.LARGE_CONTROL_SIZE,
      layout: { left: 255, centerY: -60, height: 120, width: 150 },
      layoutDirection: SC.LAYOUT_VERTICAL,
      itemTitleKey: 'title',
      itemValueKey: 'value',
      items: [
      { title: "Scala", value: SC.FILL },
      { title: "Real", value: SC.SCALE_NONE }
      ],
      valueBinding: "Images.scaleValue"
    }),

    scaleShadowImage: SC.ImageView.extend({
      classNames: ['shadow-image'],
      alignBinding: SC.Binding.oneWay('Images.alignValue'),
      scaleBinding: SC.Binding.oneWay('Images.scaleValue'),
      layout: { border: 1, centerX: 200, centerY: 0, width: 250, height: 250 },
      value: sc_static('fjola.jpg'),


      alignScaleObserver: function(){
        var align = this.get('align'),
        scale = this.get('scale');

        switch (scale){
          case SC.BEST_FILL:
          this.adjust({ height: 250, width: 376, centerY: 0 });

          switch (align){
            case SC.ALIGN_TOP_LEFT:
            case SC.ALIGN_LEFT:
            case SC.ALIGN_BOTTOM_LEFT:
             this.adjust('centerX', 200 + 63);
             break;
            case SC.ALIGN_TOP_RIGHT:
            case SC.ALIGN_RIGHT:
            case SC.ALIGN_BOTTOM_RIGHT:
             this.adjust('centerX', 200 - 63);
             break;
            default:
             this.adjust('centerX',200);
          }
         case SC.SCALE_NONE:
          this.adjust({ height: 432, width: 650 });

          switch (align){
            case SC.ALIGN_TOP_LEFT:
             this.adjust('centerX', 200 + 200);
             this.adjust('centerY', 91);
             break;
            case SC.ALIGN_LEFT:
             this.adjust('centerX', 200 + 200);
             this.adjust('centerY', 0);
             break;
            case SC.ALIGN_BOTTOM_LEFT:
             this.adjust('centerX', 200 + 200);
             this.adjust('centerY', -91);
             break;
            case SC.ALIGN_TOP_RIGHT:
             this.adjust('centerX', 200 - 200);
             this.adjust('centerY', 91);
             break;
            case SC.ALIGN_RIGHT:
             this.adjust('centerX', 200 - 200);
             this.adjust('centerY', 0);
             break;
            case SC.ALIGN_BOTTOM_RIGHT:
             this.adjust('centerX', 200 - 200);
             this.adjust('centerY', -91);
             break;
            case SC.ALIGN_TOP:
             this.adjust('centerX', 200);
             this.adjust('centerY', 91);
             break;
            case SC.ALIGN_BOTTOM:
             this.adjust('centerX', 200);
             this.adjust('centerY', -91);
             break;
            default:
             this.adjust('centerX', 200);
             this.adjust('centerY', 0);  
            }
            break;
          default:
          this.adjust({height: 250, width: 250, centerX: 200, centerY: 0 })
        }
      }.observes('align', 'scale')
    }),

scaleImage: SC.ImageView.extend({
  clasNames: ['scaled-image'],
  alignBinding: SC.Binding.oneWay('Images.alignValue'),
  layout: { border: 1, centerX: 200, centerY: 0, width: 250, height: 250 },
  scaleBinding: SC.Binding.oneWay('Images.scaleValue'),
  value: sc_static('fjola.jpg')
})
  })

});
