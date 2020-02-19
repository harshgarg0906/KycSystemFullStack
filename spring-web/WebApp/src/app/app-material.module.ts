import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
    imports:[MatFormFieldModule,
             MatInputModule,
             MatToolbarModule,
             MatDialogModule,
             MatButtonModule,
             MatSnackBarModule          
            ],
    exports:[MatFormFieldModule
        ,MatInputModule,
        MatToolbarModule,
        MatDialogModule,
        MatButtonModule,
        MatSnackBarModule
        ]

})
export class AppMaterialModule
{

}