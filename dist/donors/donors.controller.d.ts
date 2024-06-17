import { DonorsService } from './donors.service';
import { CreateDonorDto } from './dto/create-donor.dto';
import { UpdateDonorDto } from './dto/update-donor.dto';
export declare class DonorsController {
    private readonly donorsService;
    constructor(donorsService: DonorsService);
    create(createDonorDto: CreateDonorDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateDonorDto: UpdateDonorDto): string;
    remove(id: string): string;
}
