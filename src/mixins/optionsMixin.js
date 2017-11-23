export default {
  props: ["widgetName"],
  data () {
    return {
      isOpen: true
    }
  },
  // Have an error mixin as well, detects if error and sets error value
  // and message
  created() {
    // Probably have to move this to store
    // That way only iterate this once
    // No still need this. That way store tracks component existence,
    // and each one tracks it's own value
    console.log("this.name", this.widgetName)
    let storageValues = JSON.parse(localStorage.getItem(this.widgetName));
    for (var key in storageValues) {
      if(storageValues.hasOwnProperty(key)) {
        this[key] = storageValues[key]
      }
    }
  },
  // These however should be mixinx
  // That way each component can be minimized and removed from flow
  // Or maybe just make it a header? yeah, header component
  // and pass the parent function?
  methods: {
    toggle(){
      isOpen = !isOpen;
    },
    removeComponent() {
      // unbind component and remove from dom
    }
  },
  saveToLocal(componentValues) {
    localStorage.setItem(this.widgetName, componentValues);
  }
}

