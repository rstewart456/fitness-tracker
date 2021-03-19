import { NgModule } from '@angular/core'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatButtonModule} from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core'
import { MatCheckboxModule } from '@angular/material/checkbox'


@NgModule({
    imports: [
        MatFormFieldModule, 
        MatButtonModule, 
        MatIconModule, 
        MatInputModule, 
        MatDatepickerModule, 
        MatNativeDateModule,
        MatCheckboxModule
    ],
    exports: [
        MatFormFieldModule, 
        MatButtonModule, 
        MatIconModule, 
        MatInputModule, 
        MatDatepickerModule, 
        MatNativeDateModule,
        MatCheckboxModule
    ]
})

export class MaterialModule {}