import { Service } from "typedi";
import { EntityRepository, Repository } from "typeorm";
import { Video } from "../../graphql/Video/Video.schema";
import { IVideosRepository } from "./IVideosRepository";

@Service()
@EntityRepository(Video)
export class VideosRepository extends Repository<Video> implements IVideosRepository {}