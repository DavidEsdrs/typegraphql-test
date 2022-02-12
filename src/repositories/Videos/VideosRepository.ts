import { Service } from "typedi";
import { EntityRepository, getCustomRepository, Repository } from "typeorm";
import { Video } from "../../entities/Video.schema";
import { IVideosRepository } from "./IVideosRepository";

const buildVideosRepository = () => getCustomRepository(VideosRepository);

@Service({ factory: buildVideosRepository })
@EntityRepository(Video)
export class VideosRepository extends Repository<Video> implements IVideosRepository {
    async findById(id: string): Promise<Video> {
        const video = await this.findOne({ id });
        return video;
    }
}