import { Component, Output, EventEmitter } from '@angular/core';

@Component ({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    @Output() fireMenuEvent = new EventEmitter<string>();
    
    onMenuPressed (feature: string) {
        this.fireMenuEvent.emit(feature);
    }

}