import { Injectable } from '@nestjs/common';
import { CreateDonorDto } from './dto/create-donor.dto';
import { UpdateDonorDto } from './dto/update-donor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Donor } from './entities/donor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DonorsService {
  constructor(@InjectRepository(Donor) private repository: Repository<Donor>) {}

  async create(createDonorDto: CreateDonorDto) {
    // create a new donors
    return await this.repository.save(createDonorDto);

    // email is unique
  }

  async findAll() {
    // list all donors
    return await this.repository.find();
  }

  async findOne(id: number) {
    // find one donor
    return await this.repository.findOneBy({ id: id });
  }

  async findOneByEmail(email: string): Promise<Donor | undefined> {
    return await this.repository.findOne({ where: { email } });
  }
  
  async update(id: number, updateDonorDto: UpdateDonorDto) {
    return await this.repository.update(id, updateDonorDto);
  }

  async remove(id: number) {
    return await this.repository.delete({ id: id });
  }
}
