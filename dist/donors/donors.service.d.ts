import { CreateDonorDto } from './dto/create-donor.dto';
import { UpdateDonorDto } from './dto/update-donor.dto';
export declare class DonorsService {
    create(createDonorDto: CreateDonorDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateDonorDto: UpdateDonorDto): string;
    remove(id: number): string;
}
