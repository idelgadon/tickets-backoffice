import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketsModule } from './tickets/tickets.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ticket } from './tickets/ticket.entity';


@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: 'host.docker.internal',
			port: 33060,
			username: 'root',
			password: 'root',
			database: 'bo_tickets',
			entities: [Ticket],
			synchronize: true
		}),
		TicketsModule
	],
	controllers: [AppController],
  	providers: [AppService]
})
export class AppModule { 
	constructor() {}
}
