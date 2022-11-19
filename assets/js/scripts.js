'use strict';

(function() {
    // Populate random SVGs.

    const shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
    
      var iconPaths = [
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166805564059_flat64_livesds_8_8_16_16_16_0_id000_a_hot_air_balloon_with_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166805564049_flat64_livesds_8_8_16_16_16_0_id001_a_photograph_of_a_fiddle_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166805564065_flat64_livesds_8_8_16_16_16_0_id002_a_basketball_to_the_left_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166805564023_flat64_livesds_8_8_16_16_16_0_id003_a_bottle_of_beer_next_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166805564041_flat64_livesds_8_8_16_16_16_0_id004_a_tall_horse_next_to_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166805564053_flat64_livesds_8_8_16_16_16_0_id005_A_dragon-cat_hybrid._minimal_flat_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166805564045_flat64_livesds_8_8_16_16_16_0_id006_A_realistic_photograph_of_a_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166805564053_flat64_livesds_8_8_16_16_16_0_id007_A_cat_as_3D_rendered_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166805724445_flat64_livesds_8_8_16_16_16_0_id008_A_Japanese_woodblock_print_of_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166810761320_flat64_livesds_8_8_16_16_16_0_id009_a_kids_book_cover_with_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166805724417_flat64_livesds_8_8_16_16_16_0_id009_A_watercolor_painting_of_a_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166805724450_flat64_livesds_8_8_16_16_16_0_id015_a_tree._minimal_flat_2d_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166805724452_flat64_livesds_8_8_16_16_16_0_id012_a_boat._minimal_flat_2d_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166805724459_flat64_livesds_8_8_16_16_16_0_id013_a_ladder._minimal_flat_2d_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166805724465_flat64_livesds_8_8_16_16_16_0_id010_A_3D_wireframe_model_of_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166805724470_flat64_livesds_8_8_16_16_16_0_id011_a_baby_penguin._minimal_flat_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166805724472_flat64_livesds_8_8_16_16_16_0_id014_an_elephant._minimal_flat_2d_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166805887340_flat64_livesds_8_8_16_16_16_0_id021_Underwater_Submarine._minimal_flat_2d_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166805887360_flat64_livesds_8_8_16_16_16_0_id018_Horse_eating_a_cupcake._minimal_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166805887361_flat64_livesds_8_8_16_16_16_0_id019_A_3D_rendering_of_a_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166805887372_flat64_livesds_8_8_16_16_16_0_id016_a_crown._minimal_flat_2d_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166805887376_flat64_livesds_8_8_16_16_16_0_id023_Watercolor_painting_of_a_fire-breathing_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166805887386_flat64_livesds_8_8_16_16_16_0_id017_the_Great_Wall._minimal_flat_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166805887386_flat64_livesds_8_8_16_16_16_0_id020_Family_vacation_to_Walt_Disney_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166805887389_flat64_livesds_8_8_16_16_16_0_id022_Forest_Temple_as_3D_rendered_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806047833_flat64_livesds_8_8_16_16_16_0_id025_A_painting_of_a_starry_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806047838_flat64_livesds_8_8_16_16_16_0_id030_A_drawing_of_a_cat._output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806047839_flat64_livesds_8_8_16_16_16_0_id029_Fast_Food._minimal_flat_2d_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806047844_flat64_livesds_8_8_16_16_16_0_id024_A_spaceship_flying_in_a_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806047846_flat64_livesds_8_8_16_16_16_0_id027_Third_eye._minimal_flat_2d_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806047850_flat64_livesds_8_8_16_16_16_0_id026_Yeti_taking_a_selfie._minimal_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806047860_flat64_livesds_8_8_16_16_16_0_id028_自転車._minimal_flat_2d_vector_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806047865_flat64_livesds_8_8_16_16_16_0_id031_Self._minimal_flat_2d_vector_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806209157_flat64_livesds_8_8_16_16_16_0_id035_Enlightenment._minimal_flat_2d_vector_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806209185_flat64_livesds_8_8_16_16_16_0_id036_The_Eiffel_Tower._minimal_flat_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806209191_flat64_livesds_8_8_16_16_16_0_id034_The_space_between_infinity._minimal_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806209192_flat64_livesds_8_8_16_16_16_0_id033_Translation._minimal_flat_2d_vector_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806209202_flat64_livesds_8_8_16_16_16_0_id037_Hashtag._minimal_flat_2d_vector_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806209205_flat64_livesds_8_8_16_16_16_0_id038_A_torii_gate._minimal_flat_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806209206_flat64_livesds_8_8_16_16_16_0_id032_Happiness._minimal_flat_2d_vector_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806209206_flat64_livesds_8_8_16_16_16_0_id039_A_realistic_painting_of_a_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806367917_flat64_livesds_8_8_16_16_16_0_id046_the_Imperial_State_Crown_of_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806367924_flat64_livesds_8_8_16_16_16_0_id042_A_picture_of_Tokyo._minimal_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806367944_flat64_livesds_8_8_16_16_16_0_id040_Landscape._minimal_flat_2d_vector_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806367952_flat64_livesds_8_8_16_16_16_0_id045_The_corporate_headquarters_complex_of_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806367954_flat64_livesds_8_8_16_16_16_0_id043_The_Tokyo_Tower_is_a_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806367955_flat64_livesds_8_8_16_16_16_0_id041_Walt_Disney_World._minimal_flat_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806367959_flat64_livesds_8_8_16_16_16_0_id044_The_United_States_of_America_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806367960_flat64_livesds_8_8_16_16_16_0_id047_the_Great_Pyramid._minimal_flat_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806532622_flat64_livesds_8_8_16_16_16_0_id050_a_painting_of_the_mona_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806532622_flat64_livesds_8_8_16_16_16_0_id053_A_blue_poison-dart_frog_sitting_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806532630_flat64_livesds_8_8_16_16_16_0_id054_A_brightly_colored_mushroom_growing_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806532649_flat64_livesds_8_8_16_16_16_0_id051_an_owl_standing_on_a_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806532655_flat64_livesds_8_8_16_16_16_0_id048_a_white_robot,_a_red_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806532659_flat64_livesds_8_8_16_16_16_0_id055_A_bumblee_sitting_on_a_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806532661_flat64_livesds_8_8_16_16_16_0_id049_a_black_dog_jumping_up_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806532665_flat64_livesds_8_8_16_16_16_0_id052_A_banana_peeling_itself._minimal_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806702702_flat64_livesds_8_8_16_16_16_0_id058_A_hotdog_in_a_tutu_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806702725_flat64_livesds_8_8_16_16_16_0_id059_A_fox_playing_the_cello._output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806702736_flat64_livesds_8_8_16_16_16_0_id062_An_octopus_playing_the_harp._output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806702780_flat64_livesds_8_8_16_16_16_0_id057_A_delicious_hamburger._minimal_flat_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806702782_flat64_livesds_8_8_16_16_16_0_id060_An_exercise_bike._minimal_flat_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806702782_flat64_livesds_8_8_16_16_16_0_id061_An_erupting_volcano,_aerial_view._output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806702782_flat64_livesds_8_8_16_16_16_0_id063_A_pig_wearing_a_backpack._output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806702786_flat64_livesds_8_8_16_16_16_0_id056_A_chihuahua_wearing_a_tutu._output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806863463_flat64_livesds_8_8_16_16_16_0_id064_A_snail_on_a_leaf._output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806863479_flat64_livesds_8_8_16_16_16_0_id069_a_bus_covered_with_assorted_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806863488_flat64_livesds_8_8_16_16_16_0_id070_The_titanic,_aerial_view._minimal_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806863501_flat64_livesds_8_8_16_16_16_0_id071_A_smiling_sloth_wearing_a_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806863503_flat64_livesds_8_8_16_16_16_0_id066_A_rabbit_cutting_grass_with_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806863511_flat64_livesds_8_8_16_16_16_0_id065_A_roulette_wheel._minimal_flat_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806863512_flat64_livesds_8_8_16_16_16_0_id068_A_yellow_schoolbus._minimal_flat_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166806863513_flat64_livesds_8_8_16_16_16_0_id067_A_tiger_karate_master._minimal_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807026350_flat64_livesds_8_8_16_16_16_0_id074_a_stop_sign_with_a_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807026350_flat64_livesds_8_8_16_16_16_0_id076_a_chimpanzee_wearing_a_bowtie_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807026351_flat64_livesds_8_8_16_16_16_0_id077_a_great_gray_owl_with_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807026355_flat64_livesds_8_8_16_16_16_0_id072_A_photo_of_a_Ming_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807026375_flat64_livesds_8_8_16_16_16_0_id073_an_ornate_metal_bench_by_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807026375_flat64_livesds_8_8_16_16_16_0_id079_a_light_shining_on_a_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807026376_flat64_livesds_8_8_16_16_16_0_id078_a_bamboo_ladder_propped_up_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807181482_flat64_livesds_8_8_16_16_16_0_id084_the_silhouette_of_an_elephant_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807181489_flat64_livesds_8_8_16_16_16_0_id081_a_beach_with_a_cruise_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807181498_flat64_livesds_8_8_16_16_16_0_id085_an_old-fashioned_phone_next_to_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807181502_flat64_livesds_8_8_16_16_16_0_id080_a_colorful_rooster._minimal_flat_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807181502_flat64_livesds_8_8_16_16_16_0_id083_a_mountain_stream_with_salmon_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807181508_flat64_livesds_8_8_16_16_16_0_id082_a_white_pawn_attacking_a_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807181508_flat64_livesds_8_8_16_16_16_0_id086_a_motorcycle_parked_in_an_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807181516_flat64_livesds_8_8_16_16_16_0_id087_a_group_of_penguins_in_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807348468_flat64_livesds_8_8_16_16_16_0_id092_a_tuba_with_red_flowers_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807348480_flat64_livesds_8_8_16_16_16_0_id090_a_tennis_court_with_a_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807348483_flat64_livesds_8_8_16_16_16_0_id088_a_helicopter_hovering_over_Times_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807348484_flat64_livesds_8_8_16_16_16_0_id095_a_girl_getting_a_kite_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807348499_flat64_livesds_8_8_16_16_16_0_id093_a_family_of_bears_passing_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807348500_flat64_livesds_8_8_16_16_16_0_id094_a_politician_giving_a_speech_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807348508_flat64_livesds_8_8_16_16_16_0_id089_a_prop_plane_flying_low_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807348512_flat64_livesds_8_8_16_16_16_0_id091_The_Alamo_with_bright_white_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807517029_flat64_livesds_8_8_16_16_16_0_id096_a_child_unraveling_a_roll_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807517054_flat64_livesds_8_8_16_16_16_0_id098_molecule._minimal_flat_2d_vector_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807517069_flat64_livesds_8_8_16_16_16_0_id101_a_shiba_inu._minimal_flat_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807517073_flat64_livesds_8_8_16_16_16_0_id100_yin-yang._minimal_flat_2d_vector_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807517079_flat64_livesds_8_8_16_16_16_0_id097_earth._minimal_flat_2d_vector_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807517082_flat64_livesds_8_8_16_16_16_0_id103_A_bowl_of_Pho._minimal_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807517118_flat64_livesds_8_8_16_16_16_0_id099_fire._minimal_flat_2d_vector_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807517123_flat64_livesds_8_8_16_16_16_0_id102_an_espresso_machine._minimal_flat_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807679890_flat64_livesds_8_8_16_16_16_0_id111_a_panda_rowing_a_boat_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807679892_flat64_livesds_8_8_16_16_16_0_id107_a_chair._minimal_flat_2d_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807679894_flat64_livesds_8_8_16_16_16_0_id106_A_picture_of_some_food_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807679896_flat64_livesds_8_8_16_16_16_0_id104_a_cup_of_boba._minimal_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807679896_flat64_livesds_8_8_16_16_16_0_id110_a_hedgehog._minimal_flat_2d_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807679912_flat64_livesds_8_8_16_16_16_0_id109_the_Sydney_Opera_House._minimal_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807679915_flat64_livesds_8_8_16_16_16_0_id105_Golden_Gate_bridge_on_the_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807679916_flat64_livesds_8_8_16_16_16_0_id108_the_Empire_State_Building._minimal_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807839707_flat64_livesds_8_8_16_16_16_0_id114_a_teapot._minimal_flat_2d_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807839709_flat64_livesds_8_8_16_16_16_0_id113_a_clock._minimal_flat_2d_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807839721_flat64_livesds_8_8_16_16_16_0_id118_a_horse._minimal_flat_2d_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807839722_flat64_livesds_8_8_16_16_16_0_id115_a_train._minimal_flat_2d_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807839723_flat64_livesds_8_8_16_16_16_0_id119_a_pumpkin._minimal_flat_2d_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807839726_flat64_livesds_8_8_16_16_16_0_id116_a_boat_in_the_canals_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807839737_flat64_livesds_8_8_16_16_16_0_id117_the_grand_canyon._minimal_flat_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807839738_flat64_livesds_8_8_16_16_16_0_id112_a_robot._minimal_flat_2d_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807999590_flat64_livesds_8_8_16_16_16_0_id124_a_margarita._minimal_flat_2d_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807999615_flat64_livesds_8_8_16_16_16_0_id126_a_stork_playing_a_violin._output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807999617_flat64_livesds_8_8_16_16_16_0_id127_a_pirate_ship_landing_on_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807999621_flat64_livesds_8_8_16_16_16_0_id120_a_knight_holding_a_long_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807999623_flat64_livesds_8_8_16_16_16_0_id122_a_city_intersection._minimal_flat_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807999633_flat64_livesds_8_8_16_16_16_0_id123_a_circular_logo._minimal_flat_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807999637_flat64_livesds_8_8_16_16_16_0_id121_The_Statue_of_Liberty_with_output-svg_8-8-16-16-16-0-bg.svg",
    "live_sds_64paths_4rejections/LIVE_SDS_benchmark_166807999643_flat64_livesds_8_8_16_16_16_0_id125_an_armchair_in_the_shape_output-svg_8-8-16-16-16-0-bg.svg",
      ];
    var pixelPaths = [
    "pixel_l1_sds_bench/166816092723_grid_l1_sds_32x32_id010_A_3D_wireframe_model_of.svg",
    "pixel_l1_sds_bench/166816092782_grid_l1_sds_32x32_id007_A_cat_as_3D_rendered.svg",
    "pixel_l1_sds_bench/166816092840_grid_l1_sds_32x32_id001_a_photograph_of_a_fiddle.svg",
    "pixel_l1_sds_bench/166816092937_grid_l1_sds_32x32_id000_a_hot_air_balloon_with.svg",
    "pixel_l1_sds_bench/166816092950_grid_l1_sds_32x32_id008_A_Japanese_woodblock_print_of.svg",
    "pixel_l1_sds_bench/166816092952_grid_l1_sds_32x32_id005_A_dragon.svg",
    "pixel_l1_sds_bench/166816092952_grid_l1_sds_32x32_id009_A_watercolor_painting_of_a.svg",
    "pixel_l1_sds_bench/166816092953_grid_l1_sds_32x32_id003_a_bottle_of_beer_next.svg",
    "pixel_l1_sds_bench/166816092953_grid_l1_sds_32x32_id006_A_realistic_photograph_of_a.svg",
    "pixel_l1_sds_bench/166816092957_grid_l1_sds_32x32_id002_a_basketball_to_the_left.svg",
    "pixel_l1_sds_bench/166816092962_grid_l1_sds_32x32_id004_a_tall_horse_next_to.svg",
    "pixel_l1_sds_bench/166816092963_grid_l1_sds_32x32_id011_a_baby_penguin.svg",
    "pixel_l1_sds_bench/166816177435_grid_l1_sds_32x32_id020_Family_vacation_to_Walt_Disney.svg",
    "pixel_l1_sds_bench/166816177508_grid_l1_sds_32x32_id016_a_crown.svg",
    "pixel_l1_sds_bench/166816177511_grid_l1_sds_32x32_id014_an_elephant.svg",
    "pixel_l1_sds_bench/166816177556_grid_l1_sds_32x32_id017_the_Great_Wall.svg",
    "pixel_l1_sds_bench/166816177557_grid_l1_sds_32x32_id022_Forest_Temple_as_3D_rendered.svg",
    "pixel_l1_sds_bench/166816177615_grid_l1_sds_32x32_id019_A_3D_rendering_of_a.svg",
    "pixel_l1_sds_bench/166816177628_grid_l1_sds_32x32_id021_Underwater_Submarine.svg",
    "pixel_l1_sds_bench/166816177629_grid_l1_sds_32x32_id023_Watercolor_painting_of_a_fire.svg",
    "pixel_l1_sds_bench/166816177636_grid_l1_sds_32x32_id013_a_ladder.svg",
    "pixel_l1_sds_bench/166816177637_grid_l1_sds_32x32_id015_a_tree.svg",
    "pixel_l1_sds_bench/166816177640_grid_l1_sds_32x32_id018_Horse_eating_a_cupcake.svg",
    "pixel_l1_sds_bench/166816177641_grid_l1_sds_32x32_id012_a_boat.svg",
    "pixel_l1_sds_bench/166816262038_grid_l1_sds_32x32_id024_A_spaceship_flying_in_a.svg",
    "pixel_l1_sds_bench/166816262043_grid_l1_sds_32x32_id032_Happiness.svg",
    "pixel_l1_sds_bench/166816262085_grid_l1_sds_32x32_id029_Fast_Food.svg",
    "pixel_l1_sds_bench/166816262086_grid_l1_sds_32x32_id025_A_painting_of_a_starry.svg",
    "pixel_l1_sds_bench/166816262086_grid_l1_sds_32x32_id028_自転車.svg",
    "pixel_l1_sds_bench/166816262112_grid_l1_sds_32x32_id031_Self.svg",
    "pixel_l1_sds_bench/166816262117_grid_l1_sds_32x32_id027_Third_eye.svg",
    "pixel_l1_sds_bench/166816262211_grid_l1_sds_32x32_id034_The_space_between_infinity.svg",
    "pixel_l1_sds_bench/166816262221_grid_l1_sds_32x32_id026_Yeti_taking_a_selfie.svg",
    "pixel_l1_sds_bench/166816262221_grid_l1_sds_32x32_id030_A_drawing_of_a_cat.svg",
    "pixel_l1_sds_bench/166816262227_grid_l1_sds_32x32_id035_Enlightenment.svg",
    "pixel_l1_sds_bench/166816262232_grid_l1_sds_32x32_id033_Translation.svg",
    "pixel_l1_sds_bench/166816347878_grid_l1_sds_32x32_id043_The_Tokyo_Tower_is_a.svg",
    "pixel_l1_sds_bench/166816347878_grid_l1_sds_32x32_id045_The_corporate_headquarters_complex_of.svg",
    "pixel_l1_sds_bench/166816347967_grid_l1_sds_32x32_id040_Landscape.svg",
    "pixel_l1_sds_bench/166816348047_grid_l1_sds_32x32_id046_the_Imperial_State_Crown_of.svg",
    "pixel_l1_sds_bench/166816348091_grid_l1_sds_32x32_id042_A_picture_of_Tokyo.svg",
    "pixel_l1_sds_bench/166816348094_grid_l1_sds_32x32_id036_The_Eiffel_Tower.svg",
    "pixel_l1_sds_bench/166816348099_grid_l1_sds_32x32_id039_A_realistic_painting_of_a.svg",
    "pixel_l1_sds_bench/166816348099_grid_l1_sds_32x32_id041_Walt_Disney_World.svg",
    "pixel_l1_sds_bench/166816348102_grid_l1_sds_32x32_id038_A_torii_gate.svg",
    "pixel_l1_sds_bench/166816348107_grid_l1_sds_32x32_id047_the_Great_Pyramid.svg",
    "pixel_l1_sds_bench/166816348113_grid_l1_sds_32x32_id037_Hashtag.svg",
    "pixel_l1_sds_bench/166816348115_grid_l1_sds_32x32_id044_The_United_States_of_America.svg",
    "pixel_l1_sds_bench/166816431865_grid_l1_sds_32x32_id051_an_owl_standing_on_a.svg",
    "pixel_l1_sds_bench/166816431918_grid_l1_sds_32x32_id053_A_blue_poison.svg",
    "pixel_l1_sds_bench/166816431965_grid_l1_sds_32x32_id050_a_painting_of_the_mona.svg",
    "pixel_l1_sds_bench/166816432093_grid_l1_sds_32x32_id052_A_banana_peeling_itself.svg",
    "pixel_l1_sds_bench/166816432101_grid_l1_sds_32x32_id048_a_white_robot.svg",
    "pixel_l1_sds_bench/166816432102_grid_l1_sds_32x32_id054_A_brightly_colored_mushroom_growing.svg",
    "pixel_l1_sds_bench/166816432102_grid_l1_sds_32x32_id055_A_bumblee_sitting_on_a.svg",
    "pixel_l1_sds_bench/166816432102_grid_l1_sds_32x32_id059_A_fox_playing_the_cello.svg",
    "pixel_l1_sds_bench/166816432115_grid_l1_sds_32x32_id049_a_black_dog_jumping_up.svg",
    "pixel_l1_sds_bench/166816432117_grid_l1_sds_32x32_id058_A_hotdog_in_a_tutu.svg",
    "pixel_l1_sds_bench/166816432118_grid_l1_sds_32x32_id057_A_delicious_hamburger.svg",
    "pixel_l1_sds_bench/166816432119_grid_l1_sds_32x32_id056_A_chihuahua_wearing_a_tutu.svg",
    "pixel_l1_sds_bench/166816515302_grid_l1_sds_32x32_id065_A_roulette_wheel.svg",
    "pixel_l1_sds_bench/166816515309_grid_l1_sds_32x32_id061_An_erupting_volcano.svg",
    "pixel_l1_sds_bench/166816515326_grid_l1_sds_32x32_id060_An_exercise_bike.svg",
    "pixel_l1_sds_bench/166816515416_grid_l1_sds_32x32_id069_a_bus_covered_with_assorted.svg",
    "pixel_l1_sds_bench/166816515419_grid_l1_sds_32x32_id063_A_pig_wearing_a_backpack.svg",
    "pixel_l1_sds_bench/166816515490_grid_l1_sds_32x32_id062_An_octopus_playing_the_harp.svg",
    "pixel_l1_sds_bench/166816515506_grid_l1_sds_32x32_id071_A_smiling_sloth_wearing_a.svg",
    "pixel_l1_sds_bench/166816515517_grid_l1_sds_32x32_id067_A_tiger_karate_master.svg",
    "pixel_l1_sds_bench/166816515517_grid_l1_sds_32x32_id068_A_yellow_schoolbus.svg",
    "pixel_l1_sds_bench/166816515518_grid_l1_sds_32x32_id064_A_snail_on_a_leaf.svg",
    "pixel_l1_sds_bench/166816515519_grid_l1_sds_32x32_id066_A_rabbit_cutting_grass_with.svg",
    "pixel_l1_sds_bench/166816515519_grid_l1_sds_32x32_id070_The_titanic.svg",
    "pixel_l1_sds_bench/166816598424_grid_l1_sds_32x32_id072_A_photo_of_a_Ming.svg",
    "pixel_l1_sds_bench/166816598490_grid_l1_sds_32x32_id078_a_bamboo_ladder_propped_up.svg",
    "pixel_l1_sds_bench/166816598569_grid_l1_sds_32x32_id077_a_great_gray_owl_with.svg",
    "pixel_l1_sds_bench/166816598581_grid_l1_sds_32x32_id073_an_ornate_metal_bench_by.svg",
    "pixel_l1_sds_bench/166816598581_grid_l1_sds_32x32_id074_a_stop_sign_with_a.svg",
    "pixel_l1_sds_bench/166816598584_grid_l1_sds_32x32_id076_a_chimpanzee_wearing_a_bowtie.svg",
    "pixel_l1_sds_bench/166816598613_grid_l1_sds_32x32_id075_a_kids_book_cover_with.svg",
    "pixel_l1_sds_bench/166816598632_grid_l1_sds_32x32_id082_a_white_pawn_attacking_a.svg",
    "pixel_l1_sds_bench/166816598635_grid_l1_sds_32x32_id079_a_light_shining_on_a.svg",
    "pixel_l1_sds_bench/166816598635_grid_l1_sds_32x32_id080_a_colorful_rooster.svg",
    "pixel_l1_sds_bench/166816598642_grid_l1_sds_32x32_id081_a_beach_with_a_cruise.svg",
    "pixel_l1_sds_bench/166816598647_grid_l1_sds_32x32_id083_a_mountain_stream_with_salmon.svg",
    "pixel_l1_sds_bench/166816681415_grid_l1_sds_32x32_id088_a_helicopter_hovering_over_Times.svg",
    "pixel_l1_sds_bench/166816681466_grid_l1_sds_32x32_id085_an_old.svg",
    "pixel_l1_sds_bench/166816681506_grid_l1_sds_32x32_id086_a_motorcycle_parked_in_an.svg",
    "pixel_l1_sds_bench/166816681618_grid_l1_sds_32x32_id087_a_group_of_penguins_in.svg",
    "pixel_l1_sds_bench/166816681632_grid_l1_sds_32x32_id084_the_silhouette_of_an_elephant.svg",
    "pixel_l1_sds_bench/166816681635_grid_l1_sds_32x32_id092_a_tuba_with_red_flowers.svg",
    "pixel_l1_sds_bench/166816681635_grid_l1_sds_32x32_id094_a_politician_giving_a_speech.svg",
    "pixel_l1_sds_bench/166816681637_grid_l1_sds_32x32_id089_a_prop_plane_flying_low.svg",
    "pixel_l1_sds_bench/166816681638_grid_l1_sds_32x32_id095_a_girl_getting_a_kite.svg",
    "pixel_l1_sds_bench/166816681639_grid_l1_sds_32x32_id093_a_family_of_bears_passing.svg",
    "pixel_l1_sds_bench/166816681644_grid_l1_sds_32x32_id090_a_tennis_court_with_a.svg",
    "pixel_l1_sds_bench/166816681645_grid_l1_sds_32x32_id091_The_Alamo_with_bright_white.svg",
    "pixel_l1_sds_bench/166816765019_grid_l1_sds_32x32_id107_a_chair.svg",
    "pixel_l1_sds_bench/166816765025_grid_l1_sds_32x32_id098_molecule.svg",
    "pixel_l1_sds_bench/166816765112_grid_l1_sds_32x32_id101_a_shiba_inu.svg",
    "pixel_l1_sds_bench/166816765120_grid_l1_sds_32x32_id097_earth.svg",
    "pixel_l1_sds_bench/166816765220_grid_l1_sds_32x32_id096_a_child_unraveling_a_roll.svg",
    "pixel_l1_sds_bench/166816765231_grid_l1_sds_32x32_id103_A_bowl_of_Pho.svg",
    "pixel_l1_sds_bench/166816765231_grid_l1_sds_32x32_id105_Golden_Gate_bridge_on_the.svg",
    "pixel_l1_sds_bench/166816765236_grid_l1_sds_32x32_id099_fire.svg",
    "pixel_l1_sds_bench/166816765236_grid_l1_sds_32x32_id104_a_cup_of_boba.svg",
    "pixel_l1_sds_bench/166816765251_grid_l1_sds_32x32_id100_yin.svg",
    "pixel_l1_sds_bench/166816765251_grid_l1_sds_32x32_id106_A_picture_of_some_food.svg",
    "pixel_l1_sds_bench/166816765256_grid_l1_sds_32x32_id102_an_espresso_machine.svg",
    "pixel_l1_sds_bench/166816849842_grid_l1_sds_32x32_id108_the_Empire_State_Building.svg",
    "pixel_l1_sds_bench/166816849853_grid_l1_sds_32x32_id113_a_clock.svg",
    "pixel_l1_sds_bench/166816849935_grid_l1_sds_32x32_id110_a_hedgehog.svg",
    "pixel_l1_sds_bench/166816849949_grid_l1_sds_32x32_id112_a_robot.svg",
    "pixel_l1_sds_bench/166816850031_grid_l1_sds_32x32_id111_a_panda_rowing_a_boat.svg",
    "pixel_l1_sds_bench/166816850064_grid_l1_sds_32x32_id116_a_boat_in_the_canals.svg",
    "pixel_l1_sds_bench/166816850068_grid_l1_sds_32x32_id118_a_horse.svg",
    "pixel_l1_sds_bench/166816850069_grid_l1_sds_32x32_id109_the_Sydney_Opera_House.svg",
    "pixel_l1_sds_bench/166816850069_grid_l1_sds_32x32_id114_a_teapot.svg",
    "pixel_l1_sds_bench/166816850070_grid_l1_sds_32x32_id115_a_train.svg",
    "pixel_l1_sds_bench/166816850071_grid_l1_sds_32x32_id119_a_pumpkin.svg",
    "pixel_l1_sds_bench/166816850074_grid_l1_sds_32x32_id117_the_grand_canyon.svg",
    "pixel_l1_sds_bench/166816935607_grid_l1_sds_32x32_id121_The_Statue_of_Liberty_with.svg",
    "pixel_l1_sds_bench/166816935633_grid_l1_sds_32x32_id127_a_pirate_ship_landing_on.svg",
    "pixel_l1_sds_bench/166816935701_grid_l1_sds_32x32_id120_a_knight_holding_a_long.svg",
    "pixel_l1_sds_bench/166816935793_grid_l1_sds_32x32_id122_a_city_intersection.svg",
    "pixel_l1_sds_bench/166816935803_grid_l1_sds_32x32_id124_a_margarita.svg",
    "pixel_l1_sds_bench/166816935812_grid_l1_sds_32x32_id126_a_stork_playing_a_violin.svg",
    "pixel_l1_sds_bench/166816935818_grid_l1_sds_32x32_id123_a_circular_logo.svg",
    "pixel_l1_sds_bench/166816935819_grid_l1_sds_32x32_id125_an_armchair_in_the_shape.svg",
    ];
    var sketchPaths = [
    "paths_16/A_cat_as_3D_rendered.svg",
    "paths_16/Third_eye._minimal_2d_line.svg",
    "paths_16/A_3D_rendering_of_a.svg",
    "paths_16/A_3D_wireframe_model_of.svg",
    "paths_16/A_realistic_painting_of_a.svg",
    "paths_16/Horse_eating_a_cupcake._minimal.svg",
    "paths_16/a_basketball_to_the_left.svg",
    "paths_16/A_watercolor_painting_of_a.svg",
    "paths_16/A_torii_gate._minimal_2d.svg",
    "paths_16/A_Japanese_woodblock_print_of.svg",
    "paths_16/自転車._minimal_2d_line_drawing..svg",
    // "paths_16/Self._minimal_2d_line_drawing..svg",
    "paths_16/A_spaceship_flying_in_a.svg",
    "paths_16/a_hot_air_balloon_with.svg",
    "paths_16/Family_vacation_to_Walt_Disney.svg",
    "paths_16/The_Eiffel_Tower._minimal_2d.svg",
    "paths_16/A_dragon-cat_hybrid._minimal_2d.svg",
    "paths_16/Happiness._minimal_2d_line_drawing..svg",
    "paths_16/a_photograph_of_a_fiddle.svg",
    "paths_16/a_boat._minimal_2d_line.svg",
    "paths_16/Underwater_Submarine._minimal_2d_line.svg",
    "paths_16/A_painting_of_a_starry.svg",
    "paths_16/A_realistic_photograph_of_a.svg",
    "paths_16/Yeti_taking_a_selfie._minimal.svg",
    "paths_16/a_crown._minimal_2d_line.svg",
    "paths_16/Enlightenment._minimal_2d_line_drawing..svg",
    "paths_16/Translation._minimal_2d_line_drawing..svg",
    "paths_16/Fast_Food._minimal_2d_line.svg",
    "paths_16/Forest_Temple_as_3D_rendered.svg",
    "paths_16/a_baby_penguin._minimal_2d.svg",
    "paths_16/a_tree._minimal_2d_line.svg",
    "paths_16/Hashtag._minimal_2d_line_drawing..svg",
    "paths_16/Watercolor_painting_of_a_fire-breathing.svg",
    "paths_16/A_drawing_of_a_cat..svg",
    "paths_16/the_Great_Wall._minimal_2d.svg",
    "paths_16/The_space_between_infinity._minimal.svg",
    "paths_16/a_ladder._minimal_2d_line.svg",
    "paths_16/an_elephant._minimal_2d_line.svg",
    "paths_16/a_bottle_of_beer_next.svg",
    "paths_16/a_tall_horse_next_to.svg",
      ];
    
      const allCaptions = [
    "a hot air balloon with a yin-yang symbol, with the moon visible in the daytime sky",
    "a photograph of a fiddle next to a basketball on a ping pong table",
    "a basketball to the left of two soccer balls on a gravel driveway",
    "a bottle of beer next to an ashtray with a half-smoked cigarrette",
    "a tall horse next to a red car",
    "A dragon-cat hybrid",
    "A realistic photograph of a cat",
    "A cat as 3D rendered in Unreal Engine",
    "A Japanese woodblock print of one cat",
    "A watercolor painting of a cat",
    "A 3D wireframe model of a cat",
    "a baby penguin",
    "a boat",
    "a ladder",
    "an elephant",
    "a tree",
    "a crown",
    "the Great Wall",
    "Horse eating a cupcake",
    "A 3D rendering of a temple",
    "Family vacation to Walt Disney World",
    "Underwater Submarine",
    "Forest Temple as 3D rendered in Unreal Engine",
    "Watercolor painting of a fire-breathing dragon",
    "A spaceship flying in a starry sky",
    "A painting of a starry night sky",
    "Yeti taking a selfie",
    "Third eye",
    "自転車",
    "Fast Food",
    "A drawing of a cat",
    "Self",
    "Happiness",
    "Translation",
    "The space between infinity",
    "Enlightenment",
    "The Eiffel Tower",
    "Hashtag",
    "A torii gate",
    "A realistic painting of a sailboat",
    "Landscape",
    "Walt Disney World",
    "A picture of Tokyo",
    "The Tokyo Tower is a communications and observation tower in the Shiba-koen district of Minato Tokyo Japan",
    "The United States of America commonly known as the United States or America is a country primarily located in North America",
    // "The corporate headquarters complex of Google located at 1600 Amphitheatre Parkway in Mountain View, California",
    "the Imperial State Crown of England",
    "the Great Pyramid",
    "a white robot, a red robot and a black robot standing together",
    "a black dog jumping up to hug a woman wearing a red sweater",
    "a painting of the mona lisa on a white wall",
    "an owl standing on a wire",
    "A banana peeling itself",
    "A blue poison-dart frog sitting on a water lily",
    "A brightly colored mushroom growing on a log",
    "A bumblee sitting on a pink flower",
    "A chihuahua wearing a tutu",
    "A delicious hamburger",
    "A hotdog in a tutu skirt",
    "A fox playing the cello",
    "An exercise bike",
    "An erupting volcano, aerial view",
    "An octopus playing the harp",
    "A pig wearing a backpack",
    "A snail on a leaf",
    "A roulette wheel",
    "A rabbit cutting grass with a lawnmower",
    "A tiger karate master",
    "A yellow schoolbus",
    "a bus covered with assorted colorful graffiti on the side of it",
    "The titanic, aerial view",
    "A smiling sloth wearing a leather jacket, a cowboy hat and a kilt",
    "A photo of a Ming Dynasty vase on a leather topped table",
    "an ornate metal bench by a nature path",
    "a stop sign with a large tree behind it",
    "a kids book cover with an illustration of white dog driving a red pickup truck",
    "a chimpanzee wearing a bowtie and playing a piano",
    "a great gray owl with a mouse in its beak",
    "a bamboo ladder propped up against an oak tree",
    "a light shining on a giraffe in a street",
    "a colorful rooster",
    "a beach with a cruise ship passing by",
    "a white pawn attacking a black bishop",
    "a mountain stream with salmon leaping out of it",
    "the silhouette of an elephant on the full moon",
    "an old-fashioned phone next to a sleek laptop",
    "a motorcycle parked in an ornate bank lobby",
    "a group of penguins in a snowstorm",
    "a helicopter hovering over Times Square",
    "a prop plane flying low over the Great Wall",
    "a tennis court with a basketball hoop in one corner",
    "The Alamo with bright white clouds above it",
    "a tuba with red flowers protruding from its bell",
    "a family of bears passing by the geyser Old Faithful",
    "a politician giving a speech at a podium",
    "a girl getting a kite out of a tree",
    "a child unraveling a roll of toilet paper",
    "earth",
    "molecule",
    "fire",
    "yin-yang",
    "a shiba inu",
    "an espresso machine",
    "A bowl of Pho",
    "a cup of boba",
    "Golden Gate bridge on the surface of Mars",
    "A picture of some food in the plate",
    "a chair",
    "the Empire State Building",
    "the Sydney Opera House",
    "a hedgehog",
    "a panda rowing a boat in a pond",
    "a robot",
    "a clock",
    "a teapot",
    "a train",
    "a boat in the canals of venice",
    "the grand canyon",
    "a horse",
    "a pumpkin",
    "a knight holding a long sword",
    "The Statue of Liberty with the face of an owl",
    "a city intersection",
    "a circular logo",
    "a margarita",
    "an armchair in the shape of an avocado",
    "a stork playing a violin",
    "a pirate ship landing on the moon",
      ];
    
      const omitPhrases = [
        'minimal 2d line drawing.',
        'minimal 2d line drawing',
        'minimal flat 2d vector',
        'minimal flat 2d',
        'minimal flat',
        'minimal 2d line',
        'minimal 2d',
        'minimal',
        '2d',
      ];
    
      const promptSuffixes = {
        'live_sds_64paths_4rejections': 'minimal flat 2d vector icon. lineal color. on a white background. trending on artstation',
        'pixel_l1_sds_bench': 'pixel art. trending on artstation',
        'paths_16': 'minimal 2d line drawing. on a white background'
      }
    
      shuffleArray(iconPaths);
      shuffleArray(pixelPaths);
      shuffleArray(sketchPaths);

      let videoPaths = [iconPaths, pixelPaths, sketchPaths];
    
    var thumbnails = document.getElementById("randomVideos");
    for (var row = 0; row < 3; row++) {
    let rowEl = document.createElement("DIV");
    rowEl.classList = "row captioned_videos";
    for (var i = row*4; i < row*4+4; i++) {
        let outer = document.createElement("DIV");
        outer.classList = "col-3";
        let inner = document.createElement("DIV");
        inner.classList = "video-compare-container";
        inner.style = "width: 100%;"

        let videoPath = videoPaths[row][i];
        let caption = videoPath;
        if (videoPath.startsWith("live_sds_64paths_4rejections")) {
            caption = videoPath.replace("_output-svg_8-8-16-16-16-0-bg", "").replace("live_sds_64paths_4rejections/LIVE_SDS_benchmark_", "").replace("_flat64_livesds_8_8_16_16_16_0_id", "");
            caption = caption.replace(".svg", "").slice("166807999643".length + "000_".length).replaceAll("_", " ");
        } else if (videoPath.startsWith("pixel_l1_sds_bench")) {
            caption = videoPath.replace("pixel_l1_sds_bench/", "").replace("_grid_l1_sds_32x32_id", "");
            caption = caption.replace(".svg", "").slice("166807999643".length + "000_".length).replaceAll("_", " ");
        } else if (videoPath.startsWith("paths_16")) {
            caption = videoPath.replace("paths_16/", "").replace(".svg", "").replaceAll("_", " ");
        }
        for (let i = 0; i < omitPhrases.length; i++) {
        caption = caption.replace(omitPhrases[i], '');
        }
        for (let otherCaption of allCaptions) {
        if (otherCaption.startsWith(caption)) {
            caption = otherCaption;
        }
        }
        let captionShort = caption.trim();
        if (captionShort.length > 70) {
            captionShort = captionShort.replace(/^(.{50}[^\s]*).*/, "$1") + ' [...]';
        } else {
            captionShort = captionShort + ' [...]';
        }
        caption = caption.trim() + ' ' + promptSuffixes[videoPath.split('/')[0]];

        var componentImg = document.createElement("IMG");
        componentImg.classList = "video lazy";
        componentImg.src = "https://pub-751dccf31fca4af7b5a452d19d49cf43.r2.dev/" + videoPath;
        inner.appendChild(componentImg);

        var fullCaption = document.createElement("span");
        fullCaption.classList = "name invisible";
        fullCaption.appendChild(document.createTextNode(caption))
        inner.appendChild(fullCaption);

        var componentCaption = document.createElement("h6");
        componentCaption.classList = "caption";
        componentCaption.title = caption;
        componentCaption.appendChild(document.createTextNode(captionShort));
        inner.appendChild(componentCaption);

        // var hparams = document.createElement("p");
        // hparams.classList = "hparams";
        // if (videoPath.startsWith("live_sds_64paths_4rejections")) {
        // hparams.appendChild(document.createTextNode("SD + LIVE + SDS, 64 paths"));
        // inner.appendChild(hparams);
        // } else if (videoPath.startsWith("pixel_l1_sds_bench")) {
        // hparams.appendChild(document.createTextNode("SD + LIVE + SDS, 32x32 pixel art"));
        // inner.appendChild(hparams);
        // } else if (videoPath.startsWith("paths_16")) {
        // hparams.appendChild(document.createTextNode("SDS, 16 black Bézier curves"));
        // inner.appendChild(hparams);
        // }

        outer.appendChild(inner);
        rowEl.appendChild(outer);
        thumbnails.appendChild(rowEl);

        $(componentCaption).tooltip({'placement': 'bottom'});
    }
    }
})();
