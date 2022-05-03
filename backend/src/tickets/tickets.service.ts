import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Ticket } from './ticket.entity';

@Injectable()
export class TicketsService {
	constructor(
		@InjectRepository(Ticket)
		private TicketsRepository: Repository<Ticket>,
	) { }

	findAll(): Promise<Ticket[]> {
		return this.TicketsRepository.find();
	}

	findOne(uuid: string): Promise<Ticket> {
		return this.TicketsRepository.findOne({uuid});
	}

	async createOrUpdate(ticket: Ticket): Promise<Ticket> {
		return this.TicketsRepository.save(ticket);
	}

	async remove(uuid: string): Promise<UpdateResult> {
		return this.TicketsRepository.softDelete({uuid});
	}
}
