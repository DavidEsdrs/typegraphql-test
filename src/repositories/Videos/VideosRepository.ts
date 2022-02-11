import { Service } from "typedi";
import { EntityRepository, getCustomRepository, Repository } from "typeorm";
import { Video } from "../../graphql/Video/Video.schema";
import { IVideosRepository } from "./IVideosRepository";

const buildVideosRepository = () => getCustomRepository(VideosRepository);

@Service({ factory: buildVideosRepository })
@EntityRepository(Video)
export class VideosRepository extends Repository<Video> implements IVideosRepository {}