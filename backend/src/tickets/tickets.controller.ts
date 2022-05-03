import { Body, Controller, Delete, Get, Header, Param, Post, Put } from '@nestjs/common';
import { Ticket } from 'src/interfaces/ticket.interface';
import { UpdateResult } from 'typeorm';
import { Ticket as TicketEntity } from './ticket.entity';
import { TicketsService } from './tickets.service';

@Controller('tickets')
export class TicketsController {
	constructor(private readonly ticketsService: TicketsService) {}

	@Get()
	@Header('Access-Control-Allow-Origin', 'http://localhost:4200')
	async findAll(): Promise<Ticket[]> {
		return this.ticketsService.findAll();
	}
	@Get(':id')
	@Header('Access-Control-Allow-Origin', 'http://localhost:4200')
	async findOne(@Param('id') uuid: string): Promise<Ticket> {
		return this.ticketsService.findOne(uuid);
	}
	
	@Post()
	@Header('Access-Control-Allow-Origin', 'http://localhost:4200')
	async create(@Body() ticket: TicketEntity): Promise<Ticket> {
		return this.ticketsService.createOrUpdate(ticket)
	}
	
	@Put()
	@Header('Access-Control-Allow-Origin', 'http://localhost:4200')
	async update(@Body() ticket: TicketEntity): Promise<Ticket> {
		return this.ticketsService.createOrUpdate(ticket)
	}
	
	@Delete(':uuid')
	@Header('Access-Control-Allow-Origin', 'http://localhost:4200')
	async delete(@Param('uuid') uuid: string): Promise<UpdateResult> {
		return this.ticketsService.remove(uuid)
	}

}