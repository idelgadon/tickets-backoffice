import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Generated, PrimaryColumn } from 'typeorm';

@Entity()
export class Ticket {
	@PrimaryGeneratedColumn()
	private id: number;

	@PrimaryGeneratedColumn("uuid")
	uuid: string;

	@Column()
	event: string;

	@Column()
	price: number;

	@Column()
	venue: string;

	@Column({ default: false })
	is_sold: boolean;
	
	@CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
	created_at: Date;

	@UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
	updated_at: Date;
	
	@DeleteDateColumn({ type: "timestamp" })
	deleted_at: Date | null;
}