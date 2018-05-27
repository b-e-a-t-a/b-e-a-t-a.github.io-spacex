import { observable, action, autorun } from 'mobx';

class MainStore {
    @observable currentViewName = 'list';

    @observable listState = {
        error: null,
        isLoaded: false,
        launches: [],
        launch: '',
        launchSite: '',
        rocket: '',
        isNoResults: false
    }

    constructor() {
        this.disposeAutorun = autorun(() => {
                fetch("https://api.spacexdata.com/v2/launches/all")
                    .then(response => response.json())
                    .then(result => {
                        this.listState.isLoaded = true;
                        this.listState.launches = result;
                    })
                    .catch(error => {
                        this.listState.isLoaded = true;
                        this.listState.error = error;
                    })     
        });
    }


    @action
    switchView(viewName) {
        this.currentViewName = viewName;
    }
}

const instance = new MainStore();

export default instance;