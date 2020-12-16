import { Component } from '@angular/core';
import { EmailService } from './services/email.service';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [EmailService]
})
export class AppComponent {
  title = 'David Raygosa | PortFolio';

  public Name_DOM:string;
  public Email_DOM:string;
  public Subject_DOM:string;
  public Message_DOM:string;
  public sentEmail:boolean = true;
  public submitMessage:string = '';

  constructor(private _emailService:EmailService)
  {}

  Onsubmit(form)
  {
  	this.sentEmail = false;
  	this.submitMessage = '';
  	this._emailService.sendEmail(form.value).subscribe((response : any) => 
  		{
  			if(response.message == 'Correo Enviado') this.sentEmail = true;
  			if(this.sentEmail)
			{
				this.submitMessage = 'Tu mensaje ha sido enviado. Gracias!';
				form.reset();
				this.clearSubmitMessages();
			}
  			setTimeout(() =>
  			{
  				if(!this.sentEmail)
  				{
  					this.sentEmail = true;
  					this.submitMessage = 'Ops, ha ocurrido un error al enviar el mensaje, intenta de nuevo.';
  					this.clearSubmitMessages();
  				}
  			},5000);
  		});
  }

  clearSubmitMessages()
  {
	setTimeout(() =>
	{
		this.submitMessage = '';
	},5000);
  }
}
