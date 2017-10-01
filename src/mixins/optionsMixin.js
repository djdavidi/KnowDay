export default {
  props: ["widgetName"],
  data () {
    return {
      isOpen: true
    }
  },
  created() {
    console.log("this.name", this.widgetName)
    let storageValues = JSON.parse(localStorage.getItem(this.widgetName));
    for (var key in storageValues) {
      if(storageValues.hasOwnProperty(key)) {
        this[key] = storageValues[key]
      }
    }
  },
  methods: {
    toggle(){
      isOpen = !isOpen;
    }
  },
  saveToLocal(componentValues) {
    localStorage.setItem(this.widgetName, componentValues);
  }
}

