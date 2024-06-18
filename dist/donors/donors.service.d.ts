import { CreateDonorDto } from './dto/create-donor.dto';
import { UpdateDonorDto } from './dto/update-donor.dto';
import { Donor } from './entities/donor.entity';
import { Repository } from 'typeorm';
export declare class DonorsService {
    private repository;
    constructor(repository: Repository<Donor>);
    create(createDonorDto: CreateDonorDto): Promise<CreateDonorDto & Donor>;
    findAll(): Promise<Donor[]>;
    findOne(id: number): Promise<Donor>;
    update(id: number, updateDonorDto: UpdateDonorDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
