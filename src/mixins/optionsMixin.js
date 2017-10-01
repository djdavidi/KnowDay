export default {
  props: ["name"],
  data () {
    return {
      // Add toggle Functionality - by clicking on the header that stores the title
      componentVal: 3,
      isOpen: true
    }
  },
  mounted() {
    console.log("this.name", this.componentName)
    this.componentVal = localStorage.getItem(this.componentName)
    if (!this.valueIsString) {
      this.componentVal = JSON.parse(this.componentVal)
    }
    // once you get the title or whatever, which is set by the app,
    // then get the title equivalent in local stoarge.get(titleVariable)
    // and set variables with names
  },
  methods: {
    toggle(){
      isOpen = !isOpen;
    }
  },
  saveToLocal() {
    let dataToSave = (typeof componentVal === "string") ? this.componentVal : JSON.stringify(this.componentVal);
    localStorage.setItem(this.componentName, dataToSave);
  }
}

