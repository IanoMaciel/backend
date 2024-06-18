import { DonorsService } from './donors.service';
import { CreateDonorDto } from './dto/create-donor.dto';
import { UpdateDonorDto } from './dto/update-donor.dto';
export declare class DonorsController {
    private readonly donorsService;
    constructor(donorsService: DonorsService);
    create(createDonorDto: CreateDonorDto): Promise<CreateDonorDto & import("./entities/donor.entity").Donor>;
    findAll(): Promise<import("./entities/donor.entity").Donor[]>;
    findOne(id: string): Promise<import("./entities/donor.entity").Donor>;
    update(id: string, updateDonorDto: UpdateDonorDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
