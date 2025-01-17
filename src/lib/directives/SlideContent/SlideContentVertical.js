import variables from "../../variables.json";
import {scrollIt} from "../../utils";

class SlideContentVertical {
  constructor(element, data, vnode) {
    this.$el = element;
    this.value = data.value;
    this.bind();
    this.vnode = vnode;

    this.triggerClassName = this.value.triggerClassName || "rt-slide-content-vertical-trigger";
    this.containerClassName = this.value.containerClassName || "rt-slide-content-vertical-content";
    this.isActive = this.value.isActive ? this.value.isActive : false;
    this.scrollWhenActive = this.value.scrollWhenActive ? this.value.scrollWhenActive : false;
    this.activeTriggerClassName = this.value.activeTriggerClassName || "rt-slide-content-vertical-trigger--is-active";
    this.activeContainerClassName = this.value.activeContainerClassName || "rt-slide-content-vertical-content--is-active";
    this.activeTriggerClassName = this.activeTriggerClassName.split(' ');
    this.activeContainerClassName = this.activeContainerClassName.split(' ');
    this.slideName = this.value.slideName ? this.value.slideName.trim() : null;

  }

  bind = () => {
    if(!this.triggerClassName){
      setTimeout(()=>{
        this.bind();
      },50)
    }else {
      const el = this.$el;
      const trigger = el.querySelector(`.${this.triggerClassName}`);
      this.checkActiveStatus();
      if (trigger) {
        trigger.addEventListener("mousedown", this.trigger, { passive: false });
      }
    }
    if(this.slideName){
      let rtSettings = localStorage.getItem('rt-settings');
      if(rtSettings){
        rtSettings = JSON.parse(rtSettings);
        if(rtSettings.slideContent && rtSettings.slideContent[this.slideName]){
          this.trigger();
        }

      }
    }
  };
  checkActiveStatus = () => {
    const el = this.$el;
    const trigger = el.querySelector(`.${this.triggerClassName}`);
    const content = el.querySelector(`.${this.containerClassName}`);
    if (trigger && content) {
      if ((trigger.classList.contains(this.activeTriggerClassName[0]) || content.classList.contains(this.activeContainerClassName[0])) && !this.isActive) {
        this.isActive = true;
      }
    }
  };
  trigger = () => {
    const el = this.$el;
    const trigger = el.querySelector(`.${this.triggerClassName}`);
    const content = el.querySelector(`.${this.containerClassName}`);
    const addActiveClass = ()=>{
      this.activeTriggerClassName.filter(className=> className.trim().length > 0).forEach((className)=>{
        trigger.classList.add(className);
      });
      this.activeContainerClassName.filter(className=> className.trim().length > 0).forEach((className)=>{
        content.classList.add(className);
      });
    };
    if (trigger) {
      if (this.isActive) {
        this.activeTriggerClassName.filter(className=> className.trim().length > 0).forEach((className)=>{
          trigger.classList.remove(className);
        });
        this.activeContainerClassName.filter(className=> className.trim().length > 0).forEach((className)=>{
          content.classList.remove(className);
        });
      } else {
        addActiveClass();
        setTimeout(()=>{
          addActiveClass()
        },500);
        setTimeout(()=>{
          addActiveClass()
        },1000);
        setTimeout(()=>{
          addActiveClass()
        },1500);
      }
      this.isActive = !this.isActive;
      if(this.slideName) {
        let rtSettings = localStorage.getItem('rt-settings');
        if (rtSettings) {
          rtSettings = JSON.parse(rtSettings)
        }else{
          rtSettings = {};
        }
        if(this.isActive){
          rtSettings.slideContent = rtSettings.slideContent || {};
          rtSettings.slideContent[this.slideName] = 1
        }else{
          if(rtSettings.slideContent && rtSettings.slideContent[this.slideName]){
            delete rtSettings.slideContent[this.slideName];
          }
        }
        localStorage.setItem('rt-settings', JSON.stringify(rtSettings));
      }
      if(this.isActive && this.scrollWhenActive){
        scrollIt(content.offsetTop,400)
      }
    }
  };
  update = (el) => {
    this.unbind();
    this.$el = el;
    this.bind();
  };
  unbind = () => {
    const el = this.$el;
    const trigger = el.querySelector(`.${this.triggerClassName}`);
    if (trigger) {
      trigger.removeEventListener("mousedown", this.trigger);
    }
  };
}

export const SlideContentVerticalDirective = {
  name: "RtSlideContentVertical",
  bind(el, bindings, vnode) {
    vnode.context.SlideContentVertical = new SlideContentVertical(vnode.elm, bindings, vnode);
  },
  update(el, bindings, vnode) {
    vnode.context.SlideContentVertical.update(el);
  },
  beforeDestroy() {
    vnode.context.SlideContentVertical.unbind(el);
  }
};




